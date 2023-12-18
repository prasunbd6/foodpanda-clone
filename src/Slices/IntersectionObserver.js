import React, { useEffect } from 'react';

const IntersactionObserver = () => {

    useEffect(() => {
        const squares = document.querySelectorAll(`test`);

        const observer = new IntersectionObserver((squares) => {
            squares.forEach((square) => {
                if (square.isIntersecting) {
                    square.target.classList.add("bg-green-500");
                }
                else {
                    square.target.classList.remove("bg-green-500");
                }
            })
        }, {threshold:0.7});

        //observer.observe(square);

        squares.forEach(square=>observer.observe(square));

        // Clean up the observer when the component unmounts
        return () => {
            observer.disconnect();
        };
    }, []); // Empty dependency array means this effect runs once after the initial render


    return (
        <>
            <div className="md:mt-28 w-11/12 h-[1000px] mx-auto flex justify-center items-end">
                <ul className="flex flex-wrap justify-center items-end gap-10">
                    <test className="w-60 h-60 transition ease-in-out duration-500">01</test>
                    <test className="w-60 h-60 transition ease-in-out duration-500">02</test>
                    <test className="w-60 h-60 transition ease-in-out duration-500">03</test>
                    <test className="w-60 h-60 transition ease-in-out duration-500">04</test>
                    <test className="w-60 h-60 transition ease-in-out duration-500">05</test>
                    <test className="w-60 h-60 transition ease-in-out duration-500">06</test>
                    <test className="w-60 h-60 transition ease-in-out duration-500">07</test>
                    <test className="w-60 h-60 transition ease-in-out duration-500">08</test>
                    <test className="w-60 h-60 transition ease-in-out duration-500">09</test>
                    <test className="w-60 h-60 transition ease-in-out duration-500">10</test>
                    <test className="w-60 h-60 transition ease-in-out duration-500">11</test>
                    <test className="w-60 h-60 transition ease-in-out duration-500">12</test>
                    <test className="w-60 h-60 transition ease-in-out duration-500">13</test>
                    <test className="w-60 h-60 transition ease-in-out duration-500">14</test>
                    <test className="w-60 h-60 transition ease-in-out duration-500">15</test>
                    <test className="w-60 h-60 transition ease-in-out duration-500">16</test>
                    <test className="w-60 h-60 transition ease-in-out duration-500">17</test>
                    <test className="w-60 h-60 transition ease-in-out duration-500">18</test>
                    <test className="w-60 h-60 transition ease-in-out duration-500">19</test>
                    <test className="w-60 h-60 transition ease-in-out duration-500">20</test>
                </ul>
            </div>

        </>
    );
}



export default IntersactionObserver;