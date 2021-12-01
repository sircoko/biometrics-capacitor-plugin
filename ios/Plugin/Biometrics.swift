import Foundation

@objc public class Biometrics: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
