import { Button } from "@/components/ui/button";
import { Check, Download, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

const SuccessPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-lg w-full border border-gray-200">
        <div className="flex flex-col items-center">
          {/* Success Icon with Animation */}
          <div className="bg-gradient-to-r from-green-100 to-green-200 p-4 rounded-full mb-6 animate-pulse">
            <Check className="size-16 text-green-600" strokeWidth={3} />
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl font-bold text-gray-800 mb-3 text-center">
            Payment Successful!
          </h1>
          
          {/* Success Message */}
          <p className="text-gray-600 mb-8 text-center leading-relaxed">
            Thank you for your purchase! Your payment has been processed 
            securely through SSL Commerce and your order is being prepared.
          </p>

          {/* Order Details Card */}
          <div className="w-full bg-gray-50 rounded-lg p-4 mb-6 border">
            <h3 className="font-semibold text-gray-700 mb-3">Order Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Transaction ID:</span>
                <span className="font-mono text-gray-800">#TXN-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Payment Method:</span>
                <span className="text-gray-800">SSL Commerce</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="text-green-600 font-medium">Confirmed</span>
              </div>
            </div>
          </div>

          {/* What's Next Section */}
          <div className="w-full mb-6">
            <h3 className="font-semibold text-gray-700 mb-3 text-center">What&apos;s Next?</h3>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="size-4 text-blue-500 mr-3 flex-shrink-0" />
                <span>Order confirmation sent to your email</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Download className="size-4 text-green-500 mr-3 flex-shrink-0" />
                <span>Download receipt from your account dashboard</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <Link href="/account/orders" className="flex-1">
              <Button variant="outline" className="w-full">
                View Order Details
              </Button>
            </Link>
            <Link href="/products" className="flex-1">
              <Button className="w-full group">
                Continue Shopping
                <ArrowRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Additional Support */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 mb-2">
              Need help with your order?
            </p>
            <Link href="/support" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Contact Support
            </Link>
          </div>

          {/* Security Badge */}
          <div className="mt-4 flex items-center justify-center text-xs text-gray-400">
            <div className="bg-gray-100 px-3 py-1 rounded-full flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              SSL Secured Payment
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;