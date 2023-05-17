import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ReactModal from "react-modal";
import { showSignModal, signData } from "../../store/Admin";
import { useState } from "react";

const Header = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const modal_open = useSelector((state) => state.admin.isOpenModal);
    const sign_state = useSelector((state) => state.admin.isSign);

    const onAdmin = (e) => {
        dispatch(showSignModal());
    }

    const closeModal = (e) => {
        dispatch(showSignModal());
    }

    const onEmail = (e) => {
        setEmail(e.target.value);
    }

    const onPassword = (e) => {
        setPassword(e.target.value);
    }

    const onSignIn = (e) => {
        let data = { email: email, password: password };
        dispatch(signData(data));
    }

    return (
        <>
        <nav className="bg-white">
            <div className="container mx-auto flex flex-row items-center justify-between">
                <div className="relative flex items-center h-24">
                    <div className="flex items-center">
                        <NavLink to="/">
                            <img src="assets/Logo/logo.png" alt="Mura" />
                        </NavLink>
                    </div>
                    <div className="md:block p-1">
                        <div className="ml-4 flex items-center">
                            <NavLink
                                to="/about"
                                className="text-{2F2F2F} px-3 py-2 rounded-md text-normal font-weight-500"
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/faq"
                                className="text-{2F2F2F} px-3 py-2 rounded-md text-base font-weight-500"
                            >
                                FAQ
                            </NavLink>
                            <NavLink
                                to="/careers"
                                className="text-{2F2F2F} px-3 py-2 rounded-md text-base font-weight-500"
                            >
                                CAREERS
                            </NavLink>
                            <NavLink
                                to="/news"
                                className="text-{2F2F2F} px-3 py-2 rounded-md text-base font-weight-500"
                            >
                                NEWS
                            </NavLink>

                            {
                                sign_state ?
                                <NavLink
                                    to="/admin"
                                    className="text-{2F2F2F} px-3 py-2 rounded-md text-base font-weight-500"
                                >
                                CANDIDATES
                                </NavLink> : null
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <input
                        type="button"
                        value={sign_state ? "Sign Out" : "Sign In"}
                        className="bg-[#F38117] w-20 h-10 cursor-pointer rounded"
                        onClick={onAdmin}
                    />
                </div>
            </div>
        </nav>
        {
        modal_open ?
        <ReactModal
            isOpen={modal_open}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            preventScroll={true}
            overlayClassName={"ReactModal__Overlay"}
            bodyOpenClassName={"ReactModal__Body--open"}
            htmlOpenClassName={"ReactModal__Html--open"}
            shouldFocusAfterRender={true}
            shouldReturnFocusAfterClose={true}
            ariaHideApp={false}
            parentSelector={() => document.body }
            style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgb(0, 0, 0)',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)'
                },
                content: {
                    position: 'absolute',
                    zIndex: 1,
                    top: '30%',
                    left: '30%',
                    right: '30%',
                    bottom: '25%',
                    border: '1px solid black',
                    background: '#fff',
                    WebkitOverflowScrolling: 'touch',
                    outline: 'none',
                    padding: '20px'
                }
            }}
        >
            <div className="bg-white">
                <div className="flex justify-end cursor-pointer" onClick={closeModal}>
                    <img src="assets/close.svg" alt="close"/>
                </div>
                <div className="px-10 py-6 flex flex-col items-center">
                    <p className="font-bold text-black lg:text-3xl text-xl text-center">
                        Enter Your Information
                    </p>
                    <div className="flex flex-col w-full items-center mt-6">
                        <div className="lg:w-96 flex flex-col">
                            <p>Your Email<b className="pl-1 text-[#FF0000]">*</b></p>
                            <input
                                type="email"
                                value={email}
                                placeholder="your email@gmail.com"
                                className="w-full mt-3 bg-[#D9D9D9] text-base p-2 border-none rounded-md"
                                onChange={onEmail}
                            />
                        </div>
                        <div className="lg:w-96 flex flex-col mt-2">
                            <p>Password<b className="pl-1 text-[#FF0000]">*</b></p>
                            <input
                                type="password"
                                value={password}
                                className="w-full mt-3 bg-[#D9D9D9] text-base p-2 border-none rounded-md"
                                onChange={onPassword}
                            />
                        </div>
                    </div>
                    <input
                        type="button"
                        value="Sign In"
                        className="lg:mt-8 mt-2 lg:w-60 lg:h-12 bg-[#F38117] cursor-pointer lg:text-xl text-white text-base p-3 border-none text-center rounded-md"
                        onClick={onSignIn}
                    />
                </div>
            </div>
        </ReactModal> : null
        }
        </>
    )
}

export default Header;