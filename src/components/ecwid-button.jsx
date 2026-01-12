import { useScript } from "@uidotdev/usehooks"
import { useEffect, useState } from "react";

// const script = `<script data-cfasync="false" type="text/javascript" src="https://app.ecwid.com/script.js?127840001&data_platform=singleproduct_v2" charset="utf-8"></script><script type="text/javascript">xProduct()</script>`;
const ecwidButtonHtml2 = `<div class="ecsp ecsp-SingleProduct-v2 ecsp-SingleProduct-v2-centered ecsp-Product ec-Product-802136001" itemscope itemtype="http://schema.org/Product" data-single-product-id="802136001"><div class="ecsp-title" itemprop="name" content="Astro Medallion - Planetary and astrological clock"></div><div itemtype="http://schema.org/Offer" itemscope itemprop="offers"><div class="ecsp-productBrowser-price ecsp-price" itemprop="price" content="179" data-spw-price-location="button"><div itemprop="priceCurrency" content="USD"></div></div></div><div customprop="qty"></div><div customprop="addtobag"></div><div customprop="vatinprice"></div></div>`
const ecwidRawHtml = `<div class="ecsp ecsp-SingleProduct-v2 ecsp-SingleProduct-v2-bordered ecsp-SingleProduct-v2-centered ecsp-Product ec-Product-802136001" itemscope itemtype="http://schema.org/Product" data-single-product-id="802136001"><div class="ecsp-title" itemprop="name" style="display:none;" content="Astro Medallion - Planetary and astrological clock"></div><div itemtype="http://schema.org/Offer" itemscope itemprop="offers"><div class="ecsp-productBrowser-price ecsp-price" itemprop="price" content="179" data-spw-price-location="button"><div itemprop="priceCurrency" content="USD"></div></div></div><div customprop="addtobag"></div><div customprop="vatinprice"></div></div>`

export const EcwidButton = ({ className }) => {
    const status = useScript("https://app.ecwid.com/script.js?127840001&data_platform=singleproduct_v2");

    const [loading, setLoading] = useState(true);
    const ready = !loading && status === "ready";

    useEffect(() => {
        const loadButton = async () => {
            if (status == "ready") {
                xProduct()
                setLoading(false);
            }    
        }
        loadButton();
    }, [status])

    return (ready ? <div className={className} dangerouslySetInnerHTML={{ __html: ecwidButtonHtml2}}></div> : <div className={className}>Loading...</div>);
        
}
