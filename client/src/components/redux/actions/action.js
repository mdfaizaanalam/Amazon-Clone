export const getProducts = () => async (dispatch) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/getproducts`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        // Check if the HTTP status is OK (200–299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Dispatch success action with product data
        dispatch({ type: "SUCCESS_GET_PRODUCTS", payload: data });

    } catch (error) {
        // Handle fetch or network error
        dispatch({ type: "FAIL_GET_PRODUCTS", payload: error.message });
    }
};
