export const handleGuess = async (guess: string) => {
    try {
        const data = {
            "guess": guess
        }
        const response = await fetch("http://localhost:8000/flag-memory/submit-guess", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        console.log(response.text);
    } catch (error) {
        console.log(error);
    }
}

