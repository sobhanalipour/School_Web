import { useState } from "react";
import "../componentsCSS/gender.css/"


function Gender(props) {
    const [male, female] = useState(props.gender);

    const changegender = () => {
        if (male == true) {
            female(false);
        } else {
            female(true);
        }
    };

    return (
        <>
            {male ?
                (
                    <i onClick={changegender} class="bi bi-person-standing text-danger"></i>
                ) :
                (
                    <i onClick={changegender} class="bi bi-person-standing-dress text-primary"></i>
                )}
        </>
    );
}


export default Gender