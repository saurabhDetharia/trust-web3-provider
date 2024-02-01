// swift-tools-version:5.5

import PackageDescription

let package = Package(
    name: "TimelessWeb3Provider",
    products: [
        .library(
            name: "TimelessWeb3Provider",
            targets: ["TimelessWeb3Provider"]
        )
    ],
    dependencies: [],
    targets: [
        .target(
            name: "TimelessWeb3Provider",
            dependencies: [],
            path: "dist",
            resources: [
                .process("trust-min.js", localization: .none)
            ]
        )
    ]
)
