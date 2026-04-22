export function InteriorFooter() {
  return (
    <>
      <div style={{ backgroundColor: '#F9F8F4' }}>
        <img
          className="w-full h-auto bg-white"
          src="images/shared/interior-divider.png"
          alt="Decorative divider"
        />
      </div>

      <section className="flex h-[100px] items-center justify-center bg-plum">
        <img src="/images/shared/tag.png" alt="Save Now Travel Later" className="w-[40%] max-w-md" />
      </section>
    </>
  );
}
