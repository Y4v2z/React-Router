import { Form, redirect } from "react-router-dom";

export const Contact = () => {
    return (
        <div className="contact">
            <h3>İletişim bilgileri</h3>
            <Form method="post" action="/help/contact" >
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message: </label>
                    <textarea name="message"></textarea>
                </div>
                <button type="submit">Submit</button>
            </Form>
        </div>
    );
}

export const contactAction = async ({ request }) => {
    const result = await request.formData();
    console.log(result.get("email"));
    console.log(result.get("message"));
    return redirect("/")
}