import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShipProcketLoader from "./loader/shipprocketLoader";

const ShiProcket = () => {
  const searchParams = useSearchParams();
  const productInfo = useSelector((state) => state.productInfo);

  const [tagsall, settagsall] = useState("bullrider.shop");
  console.log("tagsall: ", tagsall);

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const v = localStorage.getItem("PATH");
    settagsall((vx) => (v ? v : vx));
  }, []);

  const handleShiProcket = async () => {
    const quantity = productInfo?.quantity;
    const selectProducts = productInfo?.selectProducts;

    const products = [
      {
        variantId: selectProducts.id,
        quantity: quantity,
      },
    ];
    const checkoutData = {
      key: "value",
      type: "product",
      products,
      couponCode: "",
      utmParams: "utm_medium=123&utm_source=456",
      cartAttributes: {
        tag: tagsall,
      },
    };

    setLoading(true);

    if (typeof shiprocketCheckoutEvents !== "undefined") {
      try {
        const orderResponse = await shiprocketCheckoutEvents.buyDirect(
          checkoutData
        );
      } catch (error) {
        console.error("Error placing order:", error);
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Unable to process your order. Please try again later.");

      setLoading(false);
    }
  };

  const handleConfirmPlaceOrder = async () => {
    console.log("Confirm & place order clicked!");

    let trackingUrl = "";

    const bullriderorders = searchParams.get("bullriderorders");

    const taboola_tracking = searchParams.get("tbclid");

    const searchParamss_krt = searchParams.get("searchParamss_krt");
    const searchParamss_krttracker = searchParams.get(
      "searchParamss_krttracker"
    );

    if (bullriderorders) {
      console.log("bullriderorders: ", bullriderorders);
      trackingUrl = `https://syndication.exoclick.com/tag.php?goal=e5270d80fbf05cec38238d2c07049cbd&tag=${bullriderorders}`;
    } else if (taboola_tracking) {
      trackingUrl = `https://trc.taboola.com/actions-handler/log/3/s2s-action?click-id=${taboola_tracking}&name=lead`;
    } else if (searchParamss_krt) {
      trackingUrl = `https://tsyndicate.com/api/v1/cpa/action?key=DhyxVYbxfoMwi9M6ze0UOsAckPHpuPWYWjmH&clickid=${searchParamss_krt}`;
    } else if (searchParamss_krttracker) {
      trackingUrl = `https://syndication.exoclick.com/tag.php?goal=a2231a2d9c3dcd76353a3cb3b061c605&tag=${searchParamss_krttracker}`;
    }

    if (trackingUrl) {
      console.log("trackingUrl: ", trackingUrl);
      try {
        await fetch(trackingUrl, {
          method: "GET",
          mode: "no-cors",
        });
        console.log("succcesssssssssssssssssss");
      } catch (error) {
        console.error("Tracking error:", error);
      }
    }
  };

  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (mutation.type === "childList") {
          const addedNodes = mutation.addedNodes;

          addedNodes.forEach((node) => {
            localStorage.setItem("xxxx", node.tagName);
            localStorage.setItem(" node.nodeType", node.nodeType);
            localStorage.setItem(" Order placed", node.innerHTML);

            if (
              node.nodeType === 1 &&
              node.tagName === "FORM" &&
              node.method.toLowerCase() === "post"
            ) {
              console.log("node.nodeType: ", node.nodeType);
              console.log("node.tagName: ", node.tagName);
              console.log("node.method: ", node.method);
              handleConfirmPlaceOrder();
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <ToastContainer />
      {loading && <ShipProcketLoader />}

      <form method="POST"></form>

      <div className="relative sm:w-[20rem]">
        <div className="relative">
          <button
            className="bg-green-700 text-white text-2xl font-semibold py-2 my-4 w-full rounded-xl shoporder  shiprocketbutton"
            onClick={handleShiProcket}
          >
            <div className="flex items-center align-middle justify-center">
              BUY NOW&nbsp;
              <img
                src="https://fastrr-boost-ui.pickrr.com/assets/images/boost_button/upi_options.svg"
                alt="Google Pay | Phone Pay | UPI"
                className=""
              />
              &nbsp;
              <img
                src="https://fastrr-boost-ui.pickrr.com/assets/images/boost_button/right_arrow.svg"
                className=""
                alt="right_arrow"
              />
            </div>
          </button>
        </div>
        <img
          src="https://fastrr-boost-ui.pickrr.com/assets/images/boost_button/powered_by.svg "
          alt="pic"
          className="absolute bottom-[1.3rem]  w-24 right-3 sm:w-28"
        />
      </div>
    </div>
  );
};

export default ShiProcket;
