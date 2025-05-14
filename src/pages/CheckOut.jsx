import { useNavigate, useParams } from "react-router"
import { CallToAction } from "../cmps/CallToAction"
import { gigService } from "../services/gig/gig.service.local"
import { useEffect, useState } from "react"
import { PaymentPage } from "./PaymentPage"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { useSelector } from "react-redux"
// import { addOrder } from "../store/actions/order.actions"
// import { setUserModalOpen } from '../store/user.actions'
import { utilService } from "../services/util.service"

export function CheckOut() {
    const navigate = useNavigate()
    const [currGig, setCurrGig] = useState(null)
    const { gigId, pack } = useParams()
    const loggedUser = useSelector(storeState => storeState.userModule.user)

    useEffect(() => {
        onLoadGig()
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    function calculateRoundedPrice(price) {
        const vatAmount = utilService.calculateVAT(price)
        const serviceFee = 5.25
        const overallPrice = price + serviceFee + vatAmount
        const roundedOverallPrice = Math.floor(overallPrice)
        return roundedOverallPrice
    }

    async function onLoadGig() {
        const desiredGig = await gigService.getById(gigId)
        try {
            setCurrGig(desiredGig)
        } catch (err) {
            console.log('Had issues in gig details ->', err)
            showErrorMsg('Oops cannot load gig')
        }
    }

    // async function onPurchaseOrder(selectedPackage) {
    //     try {
    //         const { title, price, delivery } = selectedPackage
    //         const gig = currGig
    //         delete gig.packages
    //         let order = { buyer: loggedUser, seller: gig.owner, gig, status: 'pending', price: calculateRoundedPrice(price), daysToMake: delivery, title }
    //         order.createdAt = Date.now()

    //         const orderToSave = await addOrder({ ...order })
    //         navigate('/order')
    //         showSuccessMsg(`Purchased service successfully!`)
    //     } catch (err) {
    //         console.log('Cannot add order to storage', err)
    //         showErrorMsg('Cannot purchase order')
    //         if (err.includes('logged')) {
    //             showErrorMsg('You must be logged in to purchase services..')
    //             setUserModalOpen(true)
    //         }

    //     }
    // }

    return (
        <section className="checkout">
            {/* {currGig !== null && <CallToAction gig={currGig} isPurchase={true} selectedPack={pack} onPurchaseOrder={onPurchaseOrder} />} */}
            <CallToAction />
            <PaymentPage />
        </section>
    )
}