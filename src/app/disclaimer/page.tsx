// app/disclaimer/page.tsx or pages/disclaimer.tsx
import Image from "next/image";
import Link from "next/link";
import "./disclaimer.css";

export default function DisclaimerPage() {
  return (
    <>
        <div className="disclaimerWrapper">
            <div className="disclaimerImageContainer">
                <Image
                    src="/home/disclaimer.webp"
                    alt="BackDrop"
                    fill
                    className="dislcaimerImage"
                />
            </div>
            <div className="dislcaimerTextContainer">
                <div className="disclaimerTitle">
                    <h2>Disclaimer | Monoscale Portfolio Project</h2>
                </div>
                <div className="disclaimerDescription">
                    <p>This website is a fictional project created by Monoscale for portfolio and demonstration purposes only. It does not represent a real business or offer actual services. If you&apos;re interested in having something like this built for your brand, feel free to visit <Link href="https://monoscale.co"><span className="realWebsiteLink">monoscale.co</span></Link> to get in touch.</p>
                </div>
            </div>
            
        </div>
        <hr></hr>
    </>
  );
}
