export default function Home() {
  const products = [
    {
      name: "Artic Shield Set",
      price: "$98",
      badge: "Best Seller",
      description: "triple-insulated padded pyjamas set for men.",
      image: "/images/pajama1.jpg",
    },
    {
      name: "Ember Cocoon Set",
      price: "$89",
      badge: "New",
      description: "triple-insulated padded pyjamas set for women.",
      image: "/images/pajama2.jpg",
    },
    {
      name: "Storm Guard Set",
      price: "$89",
      badge: "Cozy Pick",
      description: "triple-insulated padded pyjamas set for senior people.",
      image: "/images/pajama3.jpg",
    },
    {
      name: "Polar Bear Kids Set",
      price: "$64",
      badge: "Limited",
      description: "triple-insulated padded pyjamas set for men.",
      image: "/images/pajama4.jpg",
    },
  ];

  const features = [
    "Warm fabrics for cold-weather comfort",
    "Gift-ready seasonal collections",
    "Easy size selection and fast checkout",
    "Free shipping on orders over $100",
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-stone-200 bg-stone-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Winter Sleepwear
            </p>
            <h1 className="text-2xl font-bold">Frost &amp; Flannel</h1>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#shop" className="transition hover:text-slate-600">
              Shop
            </a>
            <a href="#why-us" className="transition hover:text-slate-600">
              Why Us
            </a>
            <a href="#reviews" className="transition hover:text-slate-600">
              Reviews
            </a>
          </nav>
          <button className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-90">
            Cart (0)
          </button>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-stone-300 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-600">
              Cozy season collection
            </p>
            <h2 className="max-w-xl text-5xl font-bold leading-tight md:text-6xl">
  Stay warm all winter without turning up the heater.
</h2>
<p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
  Our cozy, windproof padded pyjama sets keep you warm even below zero — helping you stay comfortable, save on electricity bills, and avoid dry skin.
</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#shop"
                className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
               Shop Winter Pyjamas
              </a>
              <a
                href="#why-us"
                className="rounded-2xl border border-stone-300 px-6 py-3 text-sm font-semibold transition hover:bg-white"
              >
                Learn more
              </a>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-stone-200 md:translate-y-8">
              <div className="mb-6 aspect-[4/5] rounded-[1.5rem] bg-gradient-to-br from-stone-200 to-stone-300" />
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Featured Set
              </p>
              <h3 className="mt-2 text-xl font-semibold">Aurora Flannel</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Soft brushed cotton, winter plaid, and an easy relaxed fit.
              </p>
            </div>
            <div className="rounded-[2rem] bg-slate-900 p-6 text-white shadow-sm md:translate-y-20">
              <div className="mb-6 aspect-[4/5] rounded-[1.5rem] bg-gradient-to-br from-slate-700 to-slate-600" />
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
                Gift Favorite
              </p>
              <h3 className="mt-2 text-xl font-semibold">Snowfall Fleece</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Extra warmth for the coldest evenings, with a premium lounge
                feel.
              </p>
            </div>
          </div>
        </section>

        <section id="why-us" className="border-y border-stone-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                Why customers choose us
              </p>
              <h3 className="mt-3 text-3xl font-bold md:text-4xl">
                Designed to feel warm, elevated, and giftable.
              </h3>
            </div>
            <div className="grid gap-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-2xl bg-stone-50 p-4 ring-1 ring-stone-200"
                >
                  <p className="font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="shop" className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                Shop
              </p>
              <h3 className="mt-2 text-3xl font-bold">Seasonal best sellers</h3>
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Search pajamas"
                className="rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm outline-none ring-0 placeholder:text-slate-400"
              />
              <select className="rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm outline-none">
                <option>Sort by</option>
                <option>Best selling</option>
                <option>Price: low to high</option>
                <option>Newest</option>
              </select>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.name}
                className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-stone-200"
              >
                <img
  src={product.image}
  alt={product.name}
  className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
/>
                <div className="mt-5 flex items-start justify-between gap-3">
                  <div>
                    <span className="rounded-full bg-stone-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                      {product.badge}
                    </span>
                    <h4 className="mt-3 text-lg font-semibold">
                      {product.name}
                    </h4>
                  </div>
                  <p className="text-base font-bold">{product.price}</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {product.description}
                </p>
                <button className="mt-5 w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90">
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </section>

        <section id="reviews" className="bg-slate-900 text-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">
                Customer love
              </p>
              <h3 className="mt-2 text-3xl font-bold">
                A storefront built to convert cozy browsing into purchases.
              </h3>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                "The layout feels premium and seasonal without being overdesigned.",
                "The product cards make it easy to compare styles and buy quickly.",
                "Perfect foundation for a small winter sleepwear brand.",
              ].map((quote) => (
                <div
                  key={quote}
                  className="rounded-[2rem] border border-slate-700 bg-slate-800 p-6"
                >
                  <p className="text-lg leading-8 text-slate-100">“{quote}”</p>
                  <p className="mt-4 text-sm text-slate-400">
                    Verified shopper
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="rounded-[2rem] bg-white p-8 text-center shadow-sm ring-1 ring-stone-200 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Email signup
            </p>
            <h3 className="mt-3 text-3xl font-bold">
              Get 10% off your first cozy order
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Build your list with a clear seasonal offer and stay in touch for
              holiday drops, restocks, and winter promotions.
            </p>
            <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 md:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-2xl border border-stone-300 px-4 py-3 text-sm outline-none"
              />
              <button className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}