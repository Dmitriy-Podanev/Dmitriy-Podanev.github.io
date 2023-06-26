import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error : any = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Страница в разработке &#128531;!</h1>
            <p>
                <i>{error?.statusText || error?.message}</i>
            </p>
        </div>
    );
}
