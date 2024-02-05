import "./App.css";
import { useState } from "react";

function App() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        mode: "",
        country: "",
        state: "",
        city: "",
        address: "",
        pin: "",
        comment: true,
        candidates: false,
        offers: false,
    });
    
    // console.log(formData)
    function changeHandler(event) {
        const {name, value, checked, type} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        });
    }

    function submitHandler(event) {
        event.preventDefault();
        console.log("Print Form Data")
        console.log(formData)
    }

    return (
        <div className="w-screen h-screen bg-slate-50 flex justify-center">
            <div className="bg-sky-100 m-1 w-1/2 rounded-lg">
                <form
                    onSubmit={submitHandler}
                    className="m-5 border-b-2 rounded-md"
                >
                    <label htmlFor="firstName" className="font-bold">
                        First Name
                    </label>
                    <br></br>
                    <input
                        className="w-full rounded-sm"
                        type="text"
                        placeholder="First Name"
                        onChange={changeHandler}
                        name="firstName"
                        id="firstName"
                        value={formData.firstName}
                    />

                    <br />
                    <label htmlFor="lastName" className="font-bold">
                        Last Name
                    </label>
                    <br></br>
                    <input
                        className="w-full rounded-sm"
                        type="text"
                        placeholder="Last Name"
                        onChange={changeHandler}
                        name="lastName"
                        id="lastName"
                        value={formData.lastName}
                    />

                    <br />
                    <label htmlFor="email" className="font-bold">
                        Email Address
                    </label>
                    <br></br>
                    <input
                        className="w-full rounded-sm"
                        type="email"
                        placeholder="your@email.com"
                        onChange={changeHandler}
                        name="email"
                        id="email"
                        value={formData.email}
                    />
                    <br />

                    <label htmlFor="country" className="font-bold">
                        Country{" "}
                    </label>
                    <br></br>
                    <select
                        className="w-full rounded-sm"
                        name="country"
                        id="country"
                        value={formData.country}
                        onChange={changeHandler}
                    >
                        <option value="india">india</option>
                        <option value="usa">USA</option>
                        <option value="china">China</option>
                    </select>
                    <br />

                    <label htmlFor="state" className="font-bold">
                        State
                    </label>
                    <br></br>
                    <select
                        className="w-full rounded-sm"
                        name="state"
                        id="state"
                        value={formData.state}
                        onChange={changeHandler}
                    >
                        <option value="bihar">Bihar</option>
                        <option value="wb">West Bengal</option>
                        <option value="delhi">Delhi</option>
                        <option value="up">Utter Pardesh</option>
                        <option value="keral">Keral</option>
                    </select>
                    <br />

                    <label htmlFor="city" className="font-bold">
                        City
                    </label>
                    <br></br>
                    <select
                        className="w-full rounded-sm"
                        name="city"
                        id="city"
                        value={formData.city}
                        onChange={changeHandler}
                    >
                        <option value="motihari">Motihari</option>
                        <option value="gopalgang">Gopalgang</option>
                        <option value="bettih">Bettih</option>
                    </select>
                    <br />

                    <label htmlFor="address" className="font-bold">
                        Street Address
                    </label>
                    <br></br>
                    <input
                        className="w-full rounded-sm"
                        type="text"
                        placeholder="address"
                        onChange={changeHandler}
                        name="address"
                        id="address"
                        value={formData.address}
                    />
                    <br />

                    <label htmlFor="pin" className="font-bold">
                        Zip/Postal Code
                    </label>
                    <br></br>
                    <input
                        className="w-full rounded-sm"
                        type="text"
                        placeholder="845422"
                        onChange={changeHandler}
                        name="pin"
                        id="pin"
                        value={formData.pin}
                    />
                    <br />

                    <p className="font-bold">By Email</p>
                    <input
                        type="checkbox"
                        onChange={changeHandler}
                        name="comment"
                        id="comment"
                        checked={formData.comment}
                    />
                    <label htmlFor="comment" className="font-bold m-1">
                        Comments
                        <p className="font-normal ml-4">
                            Get notified when someones posts a comment on a
                            posting.
                        </p>
                    </label>
                    <br />

                    <input
                        type="checkbox"
                        onChange={changeHandler}
                        name="candidates"
                        id="candidates"
                        checked={formData.candidates}
                    />
                    <label htmlFor="candidates" className="font-bold m-1">
                        Candidates
                        <p className="font-normal ml-4">
                            Get notified when a candidate applies for a job.
                        </p>
                    </label>
                    <br />

                    <input
                        type="checkbox"
                        onChange={changeHandler}
                        name="offers"
                        id="offers"
                        checked={formData.offers}
                    />
                    <label htmlFor="offers" className="font-bold m-1">
                        Offers
                        <p className="font-normal ml-4">
                            Get notified when a candidate accepts or rejects an
                            offer.
                        </p>
                    </label>
                    <br />

                    {/* Handling radio button */}
                    {/* if you want to ckeck only one radio button then name should be same otherwise take different name */}
                    <fieldset>
                        <legend className="font-bold">
                            {" "}
                            Push Notifications{" "}
                        </legend>
                        <p>These are delivered via SMS to your mobile phone.</p>
                        <input
                            type="radio"
                            onChange={changeHandler}
                            name="mode"
                            value="everything"
                            id="everything"
                            checked={formData.mode === "everything"}
                        />
                        <label htmlFor="everything"> Everything</label>

                        <br />
                        <input
                            type="radio"
                            onChange={changeHandler}
                            name="mode"
                            value="as-email"
                            id="as-email"
                            checked={formData.mode === "as-email"}
                        />
                        <label htmlFor="as-email"> Same as email</label>

                        <br />
                        <input
                            type="radio"
                            onChange={changeHandler}
                            name="mode"
                            value="no-noti"
                            id="no-noti"
                            checked={formData.mode === "no-noti"}
                        />
                        <label htmlFor="no-noti"> No push notifications</label>
                    </fieldset>
                    <br />

                    <textarea
                        placeholder="Enter your comments"
                        onChange={changeHandler}
                        name="comments"
                        value={formData.comments}
                    />

                    <br />
                    <button className="bg-green-500">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default App;
