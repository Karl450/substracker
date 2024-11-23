export default function CostTracker({ total }) {

    return (
        <h1 className="text-2xl tracking-tighter font-extrabold text-yellow-500">Total Monthly: {total.toFixed(2)}$</h1>
    )
}