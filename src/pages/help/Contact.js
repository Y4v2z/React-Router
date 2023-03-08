import { Form, redirect, useActionData } from "react-router-dom";

export const Contact = () => {
    const errors = useActionData();
    return (
        <div className="contact">
            <h3>İletişim bilgileri</h3>
            <Form method="post" action="/help/contact" >
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" />
                    {errors && errors.email && <p className="error">{errors.email}</p>}
                    {/* {errors?.email && <p>{errors.email}</p>} */}
                </div>
                <div>
                    <label htmlFor="message">Message: </label>
                    <textarea name="message"></textarea>
                    {errors && errors.message && <p className="error">{errors.message}</p>}
                    {/* {errors?.message && <p>{errors.message}</p>} */}

                </div>
                <button type="submit">Submit</button>
            </Form>
        </div>
    );
}

export const contactAction = async ({ request }) => {
    const data = await request.formData();

    const email = data.get("email");
    const message = data.get("message");

    const errors = {};

    if (typeof email !== "string" || !email.includes("@")) {
        errors.email = "Geçerli bir mail adresi giriniz "
    };
    if (typeof message !== "string" || message.length < 10) {
        errors.message = "Mesaj için en az 10 karakter girmelisiniz"
    };
    if (Object.keys(errors).length) {
        return errors;
    }
    return redirect("/")
}