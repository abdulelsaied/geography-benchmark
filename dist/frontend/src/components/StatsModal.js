"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
const StatsModal = ({ isOpen, onClose }) => {
    return ((0, jsx_runtime_1.jsxs)(react_1.Modal, { isOpen: isOpen, onClose: onClose, children: [(0, jsx_runtime_1.jsx)(react_1.ModalOverlay, {}), (0, jsx_runtime_1.jsxs)(react_1.ModalContent, { children: [(0, jsx_runtime_1.jsx)(react_1.ModalHeader, { children: "Stats" }), (0, jsx_runtime_1.jsx)(react_1.ModalCloseButton, {}), (0, jsx_runtime_1.jsx)(react_1.ModalBody, { children: "This is the stats content." }), (0, jsx_runtime_1.jsx)(react_1.ModalFooter, { children: (0, jsx_runtime_1.jsx)(react_1.Button, { colorScheme: "blue", mr: 3, onClick: onClose, children: "Close" }) })] })] }));
};
exports.default = StatsModal;
