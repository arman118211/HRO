import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PopupAd({
	imageSrc,
	redirectPath = "/donate",
	altText = "Special offer",
}) {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const alreadyShown = sessionStorage.getItem("popupShown");
		if (!alreadyShown) {
			const timer = setTimeout(() => {
				setIsOpen(true);
				sessionStorage.setItem("popupShown", "true");
			}, 600);
			return () => clearTimeout(timer);
		}
	}, []);

	useEffect(() => {
		const handleEsc = (e) => {
			if (e.key === "Escape") setIsOpen(false);
		};
		if (isOpen) {
			document.addEventListener("keydown", handleEsc);
			document.body.style.overflow = "hidden";
		}
		return () => {
			document.removeEventListener("keydown", handleEsc);
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	if (!isOpen) return null;

	const handleImageClick = () => {
		setIsOpen(false);
		navigate(redirectPath);
	};

	return (
		<div
			className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/65 backdrop-blur-sm p-4 animate-fade-in"
			onClick={() => setIsOpen(false)}
			role="dialog"
			aria-modal="true"
		>
			<div
				className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-6xl animate-pop-in"
				onClick={(e) => e.stopPropagation()}
			>
				<button
					onClick={() => setIsOpen(false)}
					aria-label="Close popup"
					className="absolute -top-3 right-0 sm:-right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-800 text-xl leading-none shadow-lg hover:bg-gray-100 transition"
				>
					×
				</button>
				<img
					src={imageSrc}
					alt={altText}
					onClick={handleImageClick}
					className="block w-full h-auto max-h-[80vh] object-cover rounded-2xl shadow-2xl cursor-pointer transition-transform duration-200 hover:scale-[1.015]"
				/>
			</div>
		</div>
	);
}
