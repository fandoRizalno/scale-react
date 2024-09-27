import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function BmiPage() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bodyFat, setBodyFat] = useState('');
    const [muscleMass, setMuscleMass] = useState('');
    const [visceralFat, setVisceralFat] = useState('');
    const [basalMetabolism, setBasalMetabolism] = useState('');
    const [errors, setErrors] = useState({});


    const location = useLocation();
    const { gender, birthdate } = location.state || {};



    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        let tempErrors = {};
        let isValid = true;

        if (!weight || isNaN(weight) || parseFloat(weight) <= 0 || weight.length > 3) {
            tempErrors.weight = 'Please enter a valid weight (max 3 digits, decimals allowed).';
            isValid = false;
        }

        if (!height || isNaN(height) || parseFloat(height) <= 0 || height.length > 3) {
            tempErrors.height = 'Please enter a valid height (max 3 digits, decimals allowed).';
            isValid = false;
        }

        if (bodyFat && (isNaN(bodyFat) || parseFloat(bodyFat) < 0 || bodyFat.length > 5 || parseFloat(bodyFat) >= 100)) {
            tempErrors.bodyFat = 'Please enter a valid body fat percentage (max 2 digits, decimals allowed).';
            isValid = false;
        }

        if (muscleMass && (isNaN(muscleMass) || parseFloat(muscleMass) <= 0 || muscleMass.length > 5)) {
            tempErrors.muscleMass = 'Please enter a valid muscle mass (max 2 digits, decimals allowed).';
            isValid = false;
        }

        if (visceralFat && (isNaN(visceralFat) || parseInt(visceralFat) < 1 || parseInt(visceralFat) > 12)) {
            tempErrors.visceralFat = 'Please enter a visceral fat value between 1 and 12.';
            isValid = false;
        }

        if (basalMetabolism && (isNaN(basalMetabolism) || parseInt(basalMetabolism) <= 999 || parseInt(basalMetabolism) >= 9999 || basalMetabolism.length > 4)) {
            tempErrors.basalMetabolism = 'Please enter a valid basal metabolism (max 4 digits).';
            isValid = false;
        }

        setErrors(tempErrors);

        let bmiScore = weight / ((height / 100) * (height / 100));

        let categoryBmi = "Normal";

        if (bmiScore < 18.5) {
            categoryBmi = "UnderWeight";
        } else if (bmiScore < 23.0) {
            categoryBmi = "Normal";
        } else if (bmiScore < 25.0) {
            categoryBmi = "Overweight";
        } else {
            categoryBmi = "Obesity"
        }




        if (isValid) {

            navigate('/profilePage', {
                state: {
                    gender,
                    birthdate,
                    weight,
                    height,
                    bodyFat,
                    muscleMass,
                    visceralFat,
                    basalMetabolism,
                    bmiScore,
                    categoryBmi

                }
            });
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <h2>Health Form</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Current Weight (Kg): </label>
                        <input
                            type="text"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            placeholder="e.g., 75.5"
                        />
                        {errors.weight && <p style={{ color: 'red' }}>{errors.weight}</p>}
                    </div>

                    <div>
                        <label>Height (Cm): </label>
                        <input
                            type="text"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            placeholder="e.g., 170.5"
                        />
                        {errors.height && <p style={{ color: 'red' }}>{errors.height}</p>}
                    </div>

                    <div>
                        <label>Body Fat (%): </label>
                        <input
                            type="text"
                            value={bodyFat}
                            onChange={(e) => setBodyFat(e.target.value)}
                            placeholder="e.g., 12.5"
                        />
                        {errors.bodyFat && <p style={{ color: 'red' }}>{errors.bodyFat}</p>}
                    </div>

                    <div>
                        <label>Muscle Mass (Kg): </label>
                        <input
                            type="text"
                            value={muscleMass}
                            onChange={(e) => setMuscleMass(e.target.value)}
                            placeholder="e.g., 40.2"
                        />
                        {errors.muscleMass && <p style={{ color: 'red' }}>{errors.muscleMass}</p>}
                    </div>

                    <div>
                        <label>Visceral Fat (1-12): </label>
                        <input
                            type="text"
                            value={visceralFat}
                            onChange={(e) => setVisceralFat(e.target.value)}
                            placeholder="e.g., 10"
                        />
                        {errors.visceralFat && <p style={{ color: 'red' }}>{errors.visceralFat}</p>}
                    </div>

                    <div>
                        <label>Basal Metabolism (Kcal): </label>
                        <input
                            type="text"
                            value={basalMetabolism}
                            onChange={(e) => setBasalMetabolism(e.target.value)}
                            placeholder="e.g., 1300"
                        />
                        {errors.basalMetabolism && <p style={{ color: 'red' }}>{errors.basalMetabolism}</p>}
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </header>
        </div>
    );
}

export default BmiPage;
