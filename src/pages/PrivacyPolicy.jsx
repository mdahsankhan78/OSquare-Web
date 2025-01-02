import React from 'react'
import Hero from '../components/Hero2'
import { pageAnimation } from './enterprise'
import { motion } from 'framer-motion'

const PrivacyPolicy = () => {
    return (
        <motion.div
            className="relative"
            initial="hidden"
            animate="visible"
            variants={pageAnimation}
        >
            <main className="min-h-screen py-8">
                <Hero
                    backgroundImage="/Banners/privacy.jpg"
                    backgroundImageMob="/Banners/privacy-mob.jpg"
                    style={{ backgroundSize: "contain" }}
                    title="Privacy Policy"
                    // subtitle="OBrain for OSquare"
                    bgClass="bg-gradient-to-r from-purple-400 to-indigo-600"
                    circleClass="bg-white"
                    textClass="text-white"
                    description={<>At OSquare, we are committed to protecting your privacy and ensuring that your personal information is handled responsibly and securely. This Privacy Policy outlines how we collect, use, and protect your information when you use our web application or digital products and services.</>}
                // buttonText="Try Now"
                // buttonLink="/#/individualpricing"
                />
                <div className="container mx-auto px-4 sm:px-6 xl:px-24 2xl:px-48">
                    <section className="bg-white shadow-md rounded-lg p-6">
                        <p className="text-gray-700 mb-6">
                            By using our web application and services, you agree to the terms
                            of this Privacy Policy. If you do not agree with any part of this
                            policy, please refrain from using our web application or services.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
                            1. Information We Collect
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>
                                <strong>Personal Information:</strong> When you register for an
                                account, make a purchase, or contact us, we may collect personal
                                information such as your name, email address, phone number,
                                payment details, and billing address.
                            </li>
                            <li>
                                <strong>Usage Data:</strong> We collect data about how you
                                interact with our web application, including IP addresses,
                                browser type, device information, pages visited, and activity
                                logs.
                            </li>
                            <li>
                                <strong>Cookies and Tracking Technologies:</strong> We use
                                cookies and similar technologies to track your activity within
                                our web application and improve your experience. You can manage
                                your cookie preferences through your browser settings.
                            </li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
                            2. How We Use Your Information
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>
                                <strong>Providing Services:</strong> To deliver and support our
                                web application services, such as cloud storage, office tools,
                                and collaboration features.
                            </li>
                            <li>
                                <strong>Improving User Experience:</strong> To analyze usage
                                patterns, enhance website functionality, and improve the quality
                                of our web application and digital products.
                            </li>
                            <li>
                                <strong>Communication:</strong> To send you updates regarding
                                your account, service notifications, promotional offers, and
                                newsletters (only if you have opted in).
                            </li>
                            <li>
                                <strong>Security and Fraud Prevention:</strong> To monitor for
                                potentially fraudulent activities and ensure the security and
                                integrity of our web application.
                            </li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
                            3. How We Share Your Information
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>
                                <strong>Service Providers:</strong> We may share your data with
                                trusted third-party service providers who assist in the operation
                                of our web application, processing payments, or providing other
                                necessary services.
                            </li>
                            <li>
                                <strong>Legal Compliance:</strong> We may disclose your
                                information if required by law or in response to legal requests,
                                such as subpoenas or government investigations.
                            </li>
                            <li>
                                <strong>Business Transfers:</strong> In the event of a merger,
                                acquisition, or sale of assets, your information may be
                                transferred to the acquiring company.
                            </li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
                            4. Data Security
                        </h2>
                        <p className="text-gray-700 mb-6">
                            We take appropriate technical and organizational measures to protect
                            your personal information against unauthorized access, alteration,
                            disclosure, or destruction. However, no method of internet
                            transmission or electronic storage is completely secure, and while
                            we strive to protect your data, we cannot guarantee its absolute
                            security.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
                            5. Your Rights
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>
                                <strong>Access and Correction:</strong> You can access and update
                                your personal information by logging into your account or
                                contacting us.
                            </li>
                            <li>
                                <strong>Deletion:</strong> You may request that we delete your
                                account and personal information, subject to any legal
                                requirements or obligations.
                            </li>
                            <li>
                                <strong>Opt-Out:</strong> You can opt out of receiving marketing
                                communications from us by following the unsubscribe instructions
                                in the emails we send you.
                            </li>
                            <li>
                                <strong>Data Portability:</strong> You can request a copy of your
                                personal data in a structured, commonly used, and machine-readable
                                format.
                            </li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
                            6. Children's Privacy
                        </h2>
                        <p className="text-gray-700 mb-6">
                            Our web application is not intended for use by children under the
                            age of 15. We do not knowingly collect or solicit personal
                            information from children. If we become aware that we have collected
                            personal information from a child under the age of 15, we will take
                            steps to delete that information.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
                            7. Changes to This Privacy Policy
                        </h2>
                        <p className="text-gray-700 mb-6">
                            We may update this Privacy Policy from time to time to reflect
                            changes in our practices or for other operational, legal, or
                            regulatory reasons. Any significant changes will be communicated by
                            posting an updated policy on this page with a revised effective
                            date.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
                            8. Contact Us
                        </h2>
                        <p className="text-gray-700 mb-6">
                            If you have any questions or concerns regarding this Privacy Policy
                            or our data practices, please contact us at:
                        </p>
                        <ul className="list-none text-gray-700 space-y-2">
                            <li>Email: info@osquare.live</li>
                            <li>Phone: +1 (517) 366-1928</li>
                        </ul>
                    </section>
                </div>
            </main>
        </motion.div>
    )
}

export default PrivacyPolicy