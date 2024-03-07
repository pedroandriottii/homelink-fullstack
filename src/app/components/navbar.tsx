import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-home-link-background-blue pt-12 pl-7 pb-4 pr-7 flex flex-row justify-space-between itens-center">
      <script src="js/navbar.js" defer></script>
      <p>SANDWICH</p>
      <Image
        src="/media/logo.png"
        alt="Home Link Logo"
        width={242}
        height={28}
      />
    </header>
  );
}
