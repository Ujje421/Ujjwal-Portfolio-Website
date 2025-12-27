"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    "WELCOME TO UJ_TECH DOSSIER v1.0.4",
    'TYPE "HELP" FOR COMMANDS',
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/") {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const executeCommand = (cmd: string) => {
    const cleanCmd = cmd.toLowerCase().trim();
    let response = `> ${cmd}: COMMAND_NOT_FOUND`;

    if (cleanCmd === "justice") {
      const isRedMode = document.documentElement.classList.contains("red-alert");

      if (!isRedMode) {
        document.documentElement.classList.add("red-alert");
        response = "OVERRIDE_SUCCESS: EMERGENCY_PROTOCOL_ACTIVE";
      } else {
        document.documentElement.classList.remove("red-alert");
        response = "SYSTEM_RESTORED: RETURNING_TO_NORMAL_OPS";
      }
    } else if (cleanCmd === "help") {
      response = "AVAILABLE: MISSIONS, RESUME, CONTACT, CLEAR, STATUS";
    } else if (cleanCmd === "missions") {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      response = "NAVIGATING_TO_PROJECT_FILES...";
      setTimeout(() => setIsOpen(false), 1000);
    } else if (cleanCmd === "contact") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      response = "ESTABLISHING_COMMUNICATION_LINK...";
      setTimeout(() => setIsOpen(false), 1000);
    } else if (cleanCmd === "resume") {
      window.open("/Ujjwal_Jagtap_Resume.pdf", "_blank");
      response = "RETRIEVING_ENCRYPTED_PDF...";
    } else if (cleanCmd === "status") {
      response = "SYSTEM_LOAD: DIALOGFLOW_CX, NODE.JS, AWS, POWER_BI [STABLE]";
    } else if (cleanCmd === "clear") {
      setHistory(["TERMINAL_CLEARED"]);
      setInput("");
      return;
    }

    setHistory((prev) => [...prev, `> ${cmd}`, response]);
    setInput("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="w-full max-w-2xl bg-batBlack border border-batAccent p-6 font-mono text-sm shadow-[0_0_50px_rgba(102,252,241,0.2)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between mb-4 border-b border-batAccent/30 pb-2">
              <span className="text-batAccent">UJ_TECH_TERMINAL</span>
              <span className="text-gray-600">[ESC] TO EXIT</span>
            </div>

            <div className="h-64 overflow-y-auto mb-4 space-y-1 custom-scrollbar">
              {history.map((line, i) => (
                <div
                  key={i}
                  className={
                    line.startsWith(">") ? "text-white" : "text-batAccent/70"
                  }
                >
                  {line}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 border-t border-batAccent/30 pt-4">
              <span className="text-batAccent animate-pulse">$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && executeCommand(input)}
                className="bg-transparent border-none outline-none text-white w-full uppercase"
                placeholder="ENTER COMMAND..."
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}