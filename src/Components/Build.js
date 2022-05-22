import React from "react"

const star = {
    color: 'red'
}

const main = {
    marginTop: '120px'
}

function Build() {
    return (
        <div>
            <main style={main}>
                <form className="form">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label>First name:<span style={star}>*</span></label><br/>
                                    <input type="text" id="fname" name="fname" size="46"/>
                                </td>
                                <td>
                                    <label>Last name:<span style={star}>*</span></label><br/>
                                    <input type="text" id="lname" name="lname" size="46"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Email:<span style={star}>*</span></label><br/>
                                    <input type="text" id="email" name="email" size="46"/>
                                </td>
                                <td>
                                    <label>Phone:<span style={star}>*</span></label><br/>
                                    <input type="text" id="phone" name="phone" size="46" placeholder="1234567890"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Address line:<span style={star}>*</span></label><br/>
                                    <input type="text" id="address" name="address" size="46"/>
                                </td>
                                <td>
                                    <label>City:<span style={star}>*</span></label><br/>
                                    <input type="text" id="city" name="city" size="46"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>State:<span style={star}>*</span></label><br/>
                                    <input type="text" id="state" name="state" size="46" placeholder="XX"/>
                                </td>
                                <td>
                                    <label>Zip code:<span style={star}>*</span></label><br/>
                                    <input type="text" id="zip" name="zip" size="46" placeholder="12345"/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="3">
                                    <label>What is your PC build budget?<span style={star}>*</span></label><br/>
                                    <input type="text" id="budget" name="budget" placeholder="All builds start at $1400 and up" size="46"/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="3">
                                    <label>How soon are you looking to purchase this PC build?<span style={star}>*</span></label><br/>
                                    <select id="time" name="time">
                                        <option value="empty">Select</option>
                                        <option value="Ready to buy today">I'm ready to buy today</option>
                                        <option value="The next 2 weeks">The next 2 weeks</option>
                                        <option value="Over a month out">Over a month out</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="3">
                                    <label>What do you plan on using this PC for?<span style={star}>*</span></label><br/>
                                    <input type="checkbox" id="game" name="game"/>
                                    <label> I just want to Game - Give me Frames!</label><br/>
                                    <input type="checkbox" id="gamenstream" name="gamenstream"/>
                                    <label> I want to Game & Stream at the same time</label><br/>
                                    <input type="checkbox" id="stream" name="stream"/>
                                    <label> Stream PC (Using it to broadcast another PC's Gameplay)</label><br/>
                                    <input type="checkbox" id="video" name="video"/>
                                    <label> I want to Edit Video or do Graphic Design</label><br/>
                                    <input type="checkbox" id="business" name="business"/>
                                    <label> This is a Business Workstation PC</label><br/>
                                    <input type="checkbox" id="family" name="family"/>
                                    <label> This is going to be our Family PC</label><br/>
                                    <input type="checkbox" id="audio" name="audio"/>
                                    <label> I want this PC for Audio Editing</label>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="3">
                                    <label>If Gaming PC, what is your desired Gaming Resolution, Refresh Rate, and what type's of games are you planning on playing?</label><br/>
                                    <textarea id="gameList" name="gameList" placeholder="Example: 1080p, 144+ FPS, Warzone and PUBG" rows="4" cols="90"></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="3">
                                    <label>Do you require any of the following?<span style={star}>*</span></label><br/>
                                    <div className="toggle-container">
                                        <input type="checkbox" id="bluetooth" name="bluetooth" className="toggle"/>
                                        <label className="label">
                                            <div className="ball"></div>
                                        </label><br/>
                                        <span>BlueTooth</span>
                                    </div>
                                    <div className="toggle-container">
                                        <input type="checkbox" id="wifi" name="wifi" className="toggle"/>
                                        <label className="label">
                                            <div className="ball"></div>
                                        </label><br/>
                                        <span>WiFi</span>
                                    </div>
                                    <div className="toggle-container">
                                        <input type="checkbox" id="nowifibt" name="nowifibt" className="toggle"/>
                                        <label className="label">
                                            <div className="ball"></div>
                                        </label><br/>
                                        <span>None</span>
                                    </div>                 
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="3">
                                    <label>Any specific themes, looks, needs, special requests, or other comments?</label><br/>
                                    <textarea id="comment" name="comment" placeholder="Do you want a black case? White case? Do you want RGB ram, RGB fans? List all of your wants and needs here!" rows="4" cols="90"></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="3">
                                    <button type="submit" id="submit">Submit Build Quote Request</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </main>
        </div>
    )
}

export default Build