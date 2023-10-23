import Line from '@/components/atoms/horizontal-line'
import Popular from '@/components/molecules/popular'
import ProductDetails from '@/components/molecules/productDetails'

const Pdp = () => {
    const heading = 'related products'
    return (
        <div>
            <ProductDetails />
            <Line />
            <Popular heading={heading} />
        </div>
    )
}

export default Pdp
