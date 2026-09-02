import { Laptop } from "lucide-react"
import { Switch } from "@/components/ui/switch"
const Devices = () => {
  return (
    <div>
        <div>
            <h1 className="text-primary font-bold text-2xl">Devices</h1>
            <p className="text-secondary font-light">Manage your account security, monitor active sessions, and configure advanced protection settings to keep your learning data safe.</p>
        </div>

        <div className="apple rounded-2xl px-3 py-2 mt-2">
            <div>
                <div className="flex items-center justify-between">
                    <div className="text-primary font-bold">
                        <h1>Active Sessions</h1>
                        <p className="text-secondary font-light">Devices currently logged into your account.</p>
                    </div>
                    <div >
                        <button className="bg-primary-soft rounded-lg px-4 py-2 cursor-pointer">Log out of all other sessions</button>
                    </div>

                </div>
            </div>

            {/* session card */}
            <div className="w-full h-full flex items-center justify-start gap-2 my-3 bg-black/40 px-3 py-4">
                <div className="bg-primary-soft rounded-full p-3">
                    <Laptop className="text-special" />
                </div>
                <div>
                    <div className="flex items-center justify-start gap-2">
                        <p className="text-primary font-semibold">MacBook Pro</p>
                        <div className="text-secondary font-light px-3 py-1 bg-primary-soft rounded-lg">Current Session</div>
                    </div>
                    <div className="">
                        <p className="text-secondary font-light">New York, USA • Safari • IP: 192.168.1.1</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex items-center justify-start gap-2 my-3 bg-black/40 px-3 py-4">
                <div className="bg-gray-800/50 rounded-full p-3">
                    <Laptop className="text-secondary" />
                </div>
                <div>
                    <div className="flex items-center justify-start gap-2">
                        <p className="text-primary font-semibold">MacBook Pro</p>
                        <div className="text-secondary font-light px-3 py-1 bg-gray-800/50 rounded-lg">Other Session</div>
                    </div>
                    <div className="">
                        <p className="text-secondary font-light">New York, USA • Safari • IP: 192.168.1.1</p>
                    </div>
                </div>
            </div>

            

        </div>
        {/* advanced security */}

        <div className="apple rounded-2xl px-3 py-2 mt-2">
            <div>
                <h1 className="text-primary font-bold ">Advanced Security</h1>
                <p className="text-secondary font-light">Additional layers of protection for your learning environment.</p>
            </div>

            <div className="px-2 py-4 flex items-center justify-between ">
                <div>
                    <h1 className="text-primary font-semibold">Login Alerts</h1>
                    <p className="text-secondary font-light">Notify me when a new device logs in.</p>
                </div>

                <div className="cursor-pointer">
                    <Switch id="login-alerts" />
                </div>
            </div>

            <hr className="text-gray-700"/>

            <div className="px-2 py-4 flex items-center justify-between ">
                <div>
                    <h1 className="text-primary font-semibold">Browser Protection</h1>
                    <p className="text-secondary font-light">Block access from known malicious IP addresses.</p>
                </div>

                <div className="cursor-pointer">
                    <Switch id="login-alerts" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Devices