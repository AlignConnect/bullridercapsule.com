
export default function AlertModel({ alertVerify, setalertVerify }) {

    return (
        <>
            <Modal opened={alertVerify.open} onClose={() => setalertVerify({ open: false, message: "" })} title="Bull Rider Capsule" centered>

                <section>
                    <div>{alertVerify.message}</div>
                </section>

            </Modal>

        </>
    );
}