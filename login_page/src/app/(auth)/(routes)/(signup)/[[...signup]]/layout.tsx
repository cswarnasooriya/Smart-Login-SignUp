import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";

export const metadata : Metadata ={
    title: 'Sign Up | ShortlyURL',
    description: "Incoder Web",
}

const SignUpLayout =({
    children,
}: {
    children: React.ReactNode
})=>{
    return(
        <>
            <NextTopLoader color="#000" showSpinner={false} />
        
        </>
    );
};

export default SignUpLayout;