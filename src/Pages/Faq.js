import React from "react"
import Aq from "../Components/Aq"

function Faq() {
    return (
        <main className="smain">
            <h1 className="faqh1">Frequently Asked Questions</h1>
            <div className="faq-container">
                <Aq question={'What drives Build-A-PC designs?'} ans={'builders and gamers are central to our designs. We are always asking, what do they need? How can we make PC building and gaming an even better experience?'}/>
                <Aq question={'What kind of culture do you promote at Build-A-PC?'} ans={'We want to feel like we are accomplishing something meaningful and to feel ownership over our work. We are pretty hands-off.'}/>
                <Aq question={'Where are you located at?'} ans={'Flushing, NY'}/>
                <Aq question={'What are your office hours?'} ans={'8:30 AM - 6:00 PM\nMonday - Friday\nWeekend Hours Vary'}/>
                <Aq question={'What is your office number?'} ans={'(212) 461-3227\nCalls Available during Office Hours'}/>
                <Aq question={'Do you offer in-person support?'} ans={'All in-person support is located in Flushing, NY only at this time.'}/>
                <Aq question={'How long are build times?'} ans={'From paid invoice to completion is typically 3-6 weeks. We usually ship within 48 hours of PC Assembly!'}/>
                <Aq question={'What types of payments do you accept?'} ans={'We primarily use PayPal, We do not currently offer any payment plan methods at this time.'}/>
                <Aq question={'What is the process of getting my PC'} ans={'Once we have an approved system configuration, payment request is sent. Once payment is received, we secure all components for your build, assemble, stress test for any issues, complete build, and get your system ready for delivery! We ship via UPS Ground. Other expedited shipping will need to be custom quoted.'}/>
                <Aq question={'Do you offer a warranty or returns'} ans={'Every Stince Built PC comes with a 1 year labor warranty. All components that are installed come with the manufacturer’s warranty. Stince Built’s warranty covers labor costs and tech support. All clients will be responsible for the cost of shipping the PC, or parts to and from our location if a defect is present, or we can walk through the swap of any parts. This Warranty does not cover damage or defects that includes but not limited to, normal wear and tear, abuse, misuse, problems with electrical power, accident, or failure to perform preventive maintenance. If any issues do arise, we will work with you to get them resolved. All sales are final, but we will make sure your PC is running in tip-top shape! If a return is approved, customer will receive refund minus a 10% restocking fee on the components only. Once systems are built and or shipped, shipping and labor are non-refundable services. All payments confirm clients confirmation of return and warranty policies.'}/>
            </div>
        </main>
    )
}

export default Faq