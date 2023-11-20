import { useRef } from "react";
export default function Paypal() {
    const client = useRef()

  useEffect(() => {
    window.paypal.Buttons({}).render(paypal.current);
  }, []);
  return (
    <div>
      <div ref={client}></div>
    </div>
  );
}
