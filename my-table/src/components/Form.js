import React from "react";

export const Form = ({handleAddFormChange, handleAddFormSubmit}) => {
    return (
        <React.Fragment>
            <h2>HTML form</h2>
            <form onSubmit={handleAddFormSubmit}>
                <div className="form">
                    <p>
                        <span>First Name:</span> 
                        <input type="text" 
                        name="firstname"
                        required
                        onChange={handleAddFormChange}
                        />
                    </p>
                    <p>
                        <span>Last Name:</span> 
                        <input type="text"
                        name="lastname"
                        required
                        onChange={handleAddFormChange}
                        />
                    </p>
                    <p>
                        <span>Date of birth:</span> 
                        <input type="date"
                        name="dateofbirth"
                        required
                        onChange={handleAddFormChange}
                        />
                    </p>
                    <p>
                        <span>Email:</span> 
                        <input type="email"
                        name="email"
                        required
                        onChange={handleAddFormChange}
                        />
                    </p>
                    <p>
                        <span>Phone:</span> 
                        <input type="tel"
                        name="phone"
                        required
                        onChange={handleAddFormChange}
                        />
                    </p>
                </div>
                <div className="form_footer">
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </div>
            </form>
        </React.Fragment>
    )
}