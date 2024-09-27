import React from 'react';
import { useLocation } from 'react-router-dom';

function ProfilePage() {
    const location = useLocation();
    const { gender, birthdate, weight, height, bodyFat, muscleMass, visceralFat, basalMetabolism, bmiScore, categoryBmi } = location.state || {};

    return (
        <div className="App">
            <header className="App-header">

                <div>
                    <h3>Your Health Information:</h3>
                    <p>Gender: {gender}</p>
                    <p>Birthdate: {birthdate}</p>
                    <p>Weight: {weight} Kg</p>
                    <p>Height: {height} Cm</p>
                    {bodyFat && <p>Body Fat: {bodyFat} %</p>}
                    {muscleMass && <p>Muscle Mass: {muscleMass} Kg</p>}
                    {visceralFat && <p>Visceral Fat: {visceralFat}</p>}
                    {basalMetabolism && <p>Basal Metabolism: {basalMetabolism} Kcal</p>}
                    <p>BMI Score: {bmiScore} </p>
                    <p>Category BMI: {categoryBmi} </p>

                </div>
            </header>
        </div>
    );
}

export default ProfilePage;
