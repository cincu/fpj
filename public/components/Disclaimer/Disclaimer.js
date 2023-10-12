import Link from "next/link";
export default function Disclaimer() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>Hi!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget
        lectus in quam blandit condimentum. Sed tristique magna sit amet velit
        sollicitudin, eget efficitur elit iaculis. Curabitur fringilla tincidunt
        justo a laoreet. Phasellus interdum neque id libero varius, ac ultricies
        mi congue.pls read <Link href="#">terms and conditions</Link> Nulla
        facilisi. Sed auctor, leo id tincidunt blandit, justo tortor imperdiet
        mauris, eu euismod tortor purus sit amet nunc. In hac habitasse platea
        dictumst. Maecenas nec eros in purus euismod luctus. You can pay using
        this
        <Link href="https://www.paypal.com/paypalme/jumisu4u/100EUR">
          {" "}
          link
        </Link>
        . Your appointment request will only be considered after payment is
        sent.
      </p>
    </div>
  );
}
