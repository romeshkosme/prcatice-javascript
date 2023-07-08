document.addEventListener("DOMContentLoaded", (event) => {
	let button = document.getElementById("connect");

	button.addEventListener("click", async () => {
		let device;
		// const VENDOR_ID = `0x046D`
		const VENDOR_ID = `0x04E8`;

		try {
			// navigator.usb.getDevices().then((res) => console.log("res - ", res));
			device = await navigator.usb.requestDevice({
				filters: [
					{
						vendorId: VENDOR_ID,
					},
				],
			});

			console.log("open", device);
			await device.open();
			console.log("configuration - ", device.configuration);
			console.log("first");
			await device.selectConfiguration(1)
			await device.claimInterface(1);
			await device.controlTransferOut({
				requestType: "vendor",
				recipient: "interface",
				request: 0x01, // vendor-specific request: enable channels
				value: 0x0013, // 0b00010011 (channels 1, 2 and 5)
				index: 0x0001, // Interface 1 is the recipient
			});
			let result = await device.transferIn(1, 6);
			console.log("result - ", result)
			await device.close();
		} catch (error) {
			console.log(error);
		}
	});
});
