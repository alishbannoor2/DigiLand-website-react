import React from 'react'

function Footer() {
    return (
        <>
            <footer className="bg-neutral-900 py-10 px-20 text-stone-500">
                <div className="container mx-auto text-sm">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-white font-bold text-sm mb-4">MarketPlaces</h3>
                            <ul>
                                <li>All NFTs</li>
                                <li>Art</li>
                                <li>Music</li>
                                <li>Domain Names</li>
                                <li>Virtual World</li>
                                <li>Collections</li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h3 className="text-white font-bold text-sm mb-4">Resources</h3>
                            <ul>
                                <li>Help Center</li>
                                <li>Partners</li>
                                <li>Suggestions</li>
                                <li>Discord</li>
                                <li>Docs</li>
                                <li>Newsletter</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-bold text-sm mb-4">Community</h3>
                            <ul>
                                <li>Community</li>
                                <li>Documentation</li>
                                <li>Brand Assets</li>
                                <li>Blog</li>
                                <li>Forum</li>
                                <li>Mailing List</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-bold text-sm mb-4">Newsletter</h3>
                            <p>Stay updated with the latest news:</p>
                            <form className="mt-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 rounded-lg bg-neutral-700 text-white"
                                />
                                <button className="w-full mt-2 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="mt-10 border-t border-stone-700 pt-5 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm">© Copyright 2025 - Digiland by Alishba Noor</p>
                        <a href="https://www.alishbanoor.online" className="text-violet-500 hover:underline">
                            www.alishbanoor.online
                        </a>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer