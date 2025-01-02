import React from 'react'
import Hero from '../components/Hero2'
import { pageAnimation } from './enterprise'
import { motion } from 'framer-motion'

const TermsConditions = () => {
    return (
        <motion.div
            className="relative"
            initial="hidden"
            animate="visible"
            variants={pageAnimation}
        >
            <Hero
                backgroundImage="/Banners/terms.jpg"
                backgroundImageMob="/Banners/terms-mob.jpg"
                style={{ backgroundSize: "contain" }}
                title="Terms and Conditions"
                // subtitle="OBrain for OSquare"
                bgClass="bg-gradient-to-r from-purple-400 to-indigo-600"
                circleClass="bg-white"
                textClass="text-white"
                description={<>Welcome to OSquare. These Terms and Conditions ("Terms") govern your
                    access to and use of the OSquare software, services, and any related
                    content. By accessing or using the Service, you agree to comply with
                    and be bound by these Terms. If you do not agree to these Terms,
                    please refrain from using the Service.</>}
            // buttonText="Try Now"
            // buttonLink="/#/individualpricing"
            />
            <main className="min-h-screen py-8">
                <div className="container mx-auto px-4 sm:px-6 xl:px-24 2xl:px-48">
                    <section className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
                            1. Acceptance of Terms
                        </h2>
                        <p className="text-gray-700 mb-6">
                            By using OSquare, you agree to comply with these Terms and
                            Conditions, as well as our Privacy Policy. These Terms govern your
                            use of the Service, including any software, features, content, and
                            support that we provide. We reserve the right to update or change
                            these Terms from time to time. If there are material changes, we
                            will notify you by updating the effective date or via other
                            communication methods. Your continued use of the Service after any
                            changes constitutes your acceptance of the updated Terms.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
                            2. License to Use the Service
                        </h2>
                        <p className="text-gray-700 mb-6">
                            OSquare grants you a limited, non-exclusive, non-transferable
                            license to access and use the ERP software for your business
                            operations, subject to these Terms and any other applicable
                            agreements or licensing terms. This license is granted for the
                            duration of your subscription to the Service, and it is strictly for
                            internal business use.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
                            3. User Accounts and Registration
                        </h2>
                        <p className="text-gray-700 mb-6">
                            In order to access certain features of OSquare, you must create an
                            account. You agree to provide accurate, complete, and current
                            information when registering for the Service and to keep your
                            account information updated. You are solely responsible for
                            maintaining the confidentiality of your account credentials (such as
                            username and password) and for all activities under your account.
                        </p>
                        <p className="text-gray-700 mb-6">
                            You agree to immediately notify OSquare if you suspect or become
                            aware of any unauthorized use of your account.
                        </p>

                        {/* Add other sections here following the same structure */}
                        <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
                            4. Use of the Service
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Violate any laws or regulations.</li>
                            <li>Upload or transmit harmful code, viruses, or malware.</li>
                            <li>Distribute unauthorized content.</li>
                            <li>Infringe on the intellectual property rights of others.</li>
                            <li>Interfere with the security or integrity of the Service.</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
                            5. Subscription and Payments
                        </h2>
                        <p className="text-gray-700 mb-6">
                            Some features of OSquare require a subscription. By subscribing, you
                            agree to pay the applicable subscription fees for the use of the
                            software. Fees may vary based on the features, number of users, or
                            other factors. You agree to provide accurate billing information and
                            pay all applicable charges on time.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
                            6. User Content
                        </h2>
                        <p className="text-gray-700 mb-6">
                            You retain ownership of any data, files, business records, and other
                            content you upload or store through OSquare (collectively, "User
                            Content"). By using the Service, you grant OSquare a worldwide,
                            royalty-free, non-exclusive license to use, store, display, and
                            process your User Content solely to provide the Service.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
                            7. Data Privacy and Security
                        </h2>
                        <p className="text-gray-700 mb-6">
                            OSquare is committed to protecting the privacy of your data. Our use
                            of personal and business data is governed by our Privacy Policy,
                            which explains how we collect, use, and protect your information. By
                            using the Service, you consent to our data practices as outlined in
                            the Privacy Policy.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
                            8. Third-Party Integrations and Services
                        </h2>
                        <p className="text-gray-700 mb-6">
                            OSquare may integrate with third-party services or applications.
                            These integrations are provided for your convenience, but OSquare
                            does not control these third-party services. Any use of third-party
                            integrations is governed by the terms and conditions of the
                            respective third-party providers. We are not responsible for the
                            actions, data practices, or functionality of third-party services.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
                            9. Service Availability and Downtime
                        </h2>
                        <p className="text-gray-700 mb-6">
                            We strive to provide continuous, reliable access to OSquare, but
                            there may be times when the Service is unavailable due to scheduled
                            maintenance, unforeseen technical issues, or other factors. We will
                            make reasonable efforts to minimize downtime and will notify you in
                            advance of scheduled maintenance whenever possible.
                        </p>

                        {/* Add remaining sections similarly */}

                        <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
                            14. Termination
                        </h2>
                        <p className="text-gray-700 mb-6">
                            We reserve the right to suspend or terminate your access to OSquare
                            at our sole discretion if we believe you have violated these Terms.
                            Upon termination, you will lose access to your account, and your
                            subscription may be canceled. You may request to delete your account
                            and data, subject to legal and contractual obligations.
                        </p>

                        <p className="text-gray-700 mt-6">
                            By using OSquare, you acknowledge that you have read, understood,
                            and agree to these Terms and Conditions.
                        </p>
                    </section>
                </div>
            </main>
        </motion.div>
    )
}

export default TermsConditions