import FutureYou from "./components/future-you/future-you";
import { Results } from "./components/results/results";

export function closeResults () {
    return (
        <FutureYou />
    );
}

export function openResults () {
    return (
        <Results />
    );
}