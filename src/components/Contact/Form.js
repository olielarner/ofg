import React, { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { useFormik } from "formik";
import * as Yup from "yup";

const url =
    "https://onefanggang.us21.list-manage.com/subscribe/post?u=56a2fc09065732f52c102f102&amp;id=971b86e2e4&amp;v_id=5478&amp;f_id=004cf5e6f0";
// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url} />;

const CustomForm = ({ status, message, onValidated }) => {
    const [success, setSuccess] = useState(false);
    const [subscriber, setSubscriber] = useState({});

    const submitForm = async (values) => {
        onValidated({
            EMAIL: values.email,
            NAME: values.name,
            SUBJECT: values.subject,
            MESSAGE: values.message,
        });
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
            terms: "",
        },

        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            terms: Yup.array().required("Terms must be checked"),
        }),

        onSubmit: (values) => {
            setSuccess(true);
            setSubscriber((subscriber) => ({
                ...values,
            }));
            submitForm(values);
        },
    });

    return (
        <div>
            <div className={`form-container ${success ? "hidden" : "block"}`}>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <label
                            className={`block w-full my-3 text-2xl font-redhat font-extralight ${
                                formik.touched.name && formik.errors.name
                                    ? "text-red-400"
                                    : "text-ofg-light-tan"
                            }`}
                            htmlFor="name"
                        >
                            {formik.touched.name && formik.errors.name
                                ? formik.errors.name
                                : "Name"}
                        </label>
                        <input
                            className="w-full h-12 border-none bg-ofg-dark-tan focus:ring-ofg-lightest-green"
                            type="text"
                            name="name"
                            placeholder=""
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <div>
                        <label
                            className={`block w-full my-3 text-2xl font-redhat font-extralight ${
                                formik.touched.email && formik.errors.email
                                    ? "text-red-400"
                                    : "text-ofg-light-tan"
                            }`}
                            htmlFor="email"
                        >
                            {formik.touched.email && formik.errors.email
                                ? formik.errors.email
                                : "Email"}
                        </label>
                        <input
                            className="w-full h-12 border-none bg-ofg-dark-tan focus:ring-ofg-lightest-green"
                            type="text"
                            name="email"
                            placeholder=""
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <div>
                        <label
                            className="block w-full my-3 text-2xl font-redhat font-extralight text-ofg-light-tan"
                            htmlFor="subject"
                        >
                            Subject
                        </label>
                        <input
                            className="w-full h-12 border-none bg-ofg-dark-tan focus:ring-ofg-lightest-green"
                            type="text"
                            name="subject"
                            placeholder=""
                            value={formik.values.subject}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div>
                        <label
                            className="block w-full my-3 text-2xl font-redhat font-extralight text-ofg-light-tan"
                            htmlFor="message"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            className="w-full border-none bg-ofg-dark-tan focus:ring-ofg-lightest-green"
                            rows="10"
                            cols="50"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div>
                        <label
                            className={`block w-full mt-3 text-base font-redhat font-extralight ${
                                formik.touched.terms && formik.errors.terms
                                    ? "text-red-400"
                                    : "text-ofg-light-tan"
                            }`}
                            htmlFor="terms"
                        >
                            {formik.touched.terms && formik.errors.terms
                                ? formik.errors.terms
                                : "Terms of service"}
                        </label>
                        <div className="flex items-center ">
                            <input
                                type="checkbox"
                                className="w-6 h-6 mr-4 border-2 border-ofg-lightest-green text-ofg-lightest-green bg-ofg-light-tan focus:border-ofg-lightest-green focus:ring-ofg-lightest-green"
                                name="terms"
                                value="checked"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <p className="inline-block my-3 text-base font-redhat font-extralight text-ofg-light-tan">
                                I agree to <strong>One Fang Digital's</strong>{" "}
                                terms and conditions
                            </p>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="px-4 py-2 mt-6 text-2xl font-thin uppercase bg-ofg-dark-clay text-ofg-light-tan font-redhat"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

            <div
                className={`max-w-[880px] text-center mb-24  ${
                    success ? "block" : "hidden"
                }`}
            >
                <p className="text-3xl font-light text-center text-ofg-light-tan font-redhat">
                    Thank you {formik.values.name}, we shall be in touch
                    shortly.
                </p>
            </div>
        </div>
    );
};

const Form = () => {
    return (
        <div id="contact" className="pt-24 pb-24 xl:pb-60 bg-ofg-light-green">
            <div className="container flex flex-col items-center mx-auto px-7">
                <div className="max-w-[880px] text-center mb-24">
                    <h2 className="mb-12 text-6xl font-light leading-none uppercase font-redhat text-ofg-light-tan xl:text-8xl">
                        Get in{" "}
                        <span className="font-bold text-ofg-dark-tan">
                            Contact
                        </span>
                    </h2>
                    <p className="text-xl font-light text-center xl:text-3xl text-ofg-light-tan font-redhat">
                        If you would like to talk about any ideas you may need
                        help with, don’t hesitate to get in touch by either
                        emailing us at{" "}
                        <a
                            href="mailto:hello@onefanggang.com"
                            className="font-normal no-underline text-ofg-dark-tan font-redhat"
                        >
                            hello@onefanggang.com
                        </a>
                        , or by filling out the form below:
                    </p>
                </div>

                <MailchimpSubscribe
                    url={url}
                    render={({ subscribe, status, message }) => (
                        <div>
                            <CustomForm
                                status={status}
                                message={message}
                                onValidated={(formData) => subscribe(formData)}
                            />
                        </div>
                    )}
                />
            </div>
        </div>
    );
};

export default Form;
