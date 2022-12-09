/** @format */
import "./writeBlogPage.css";
const WriteBlogPage = () => {
	return (
		<div className="writePage">
			<img
				className="imgUploaded"
				src="https://www.airtasker.com/blog/wp-content/uploads/2021/01/cactus-garden-golden-barrels.jpg"
				alt=""
			/>
			<form className="createForm">
				<div className="formGroup1">
					<label htmlFor="fileInput">
						<span className="uploadIcon material-symbols-outlined">upload</span>
					</label>
					<input type="file" id="fileInput" style={{ display: "none" }} />
				</div>
				<div className="formGroup">
					<input type="text" className="formTitle" placeholder="Title" autoFocus={true} />
					<textarea
						type="text"
						className="formDescription"
						placeholder="Describe your Plant..."
						rows="20"
						cols="20"
					></textarea>
				</div>
				<button type="submit" className="btnSubmit">
					Publish
				</button>
			</form>
		</div>
	);
};

export default WriteBlogPage;
