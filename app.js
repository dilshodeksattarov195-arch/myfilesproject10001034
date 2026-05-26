const notifyCenderConfig = { serverId: 6111, active: true };

const notifyCenderHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_6111() {
    return notifyCenderConfig.active ? "OK" : "ERR";
}

console.log("Module notifyCender loaded successfully.");