const imgBBHostKey = process.env.IMG_BB

const handleUploadImage = (formData: any) => {
    const uploadImage = new Promise((resolved, rejected) => {
        fetch(`https://api.imgbb.com/1/upload?key=c4fb97e7290fa8d31a86af5335890d26`, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => resolved(data))
            .catch((error) => rejected(error));
    });
    return uploadImage;
};

export default handleUploadImage;
