import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function PersonalData() {
    const [gender, setGender] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();


        let tempErrors = {};
        let isValid = true;

        if (!gender) {
            tempErrors.gender = 'Please select your gender.';
            isValid = false;
        }

        if (!birthdate) {
            tempErrors.birthdate = 'Please select your birthdate.';
            isValid = false;
        }

        setErrors(tempErrors);

        if (isValid) {

            navigate('/bmiPage', {
                state: {
                    gender,
                    birthdate
                }
            });
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <h2>Gender Selection</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="male"
                                checked={gender === 'male'}
                                onChange={() => setGender('male')}
                            />
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="female"
                                checked={gender === 'female'}
                                onChange={() => setGender('female')}
                            />
                            Female
                        </label>
                    </div>
                    {errors.gender && <p style={{ color: 'red' }}>{errors.gender}</p>}

                    <div>
                        <label>Date of Birth: </label>
                        <input
                            type="date"
                            value={birthdate}
                            onChange={(e) => setBirthdate(e.target.value)}
                        />
                    </div>
                    {errors.birthdate && <p style={{ color: 'red' }}>{errors.birthdate}</p>}

                    <button type="submit">Submit</button>
                </form>
            </header>
        </div>
    );
}

export default PersonalData;
