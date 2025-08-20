import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import emailjs from 'emailjs-com';

// --- BlinkingCursor Component ---
function BlinkingCursor() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => setShow(s => !s), 500);
    return () => clearInterval(interval);
  }, []);
  return <span style={{ color: "#6c63ff" }}>{show ? '|' : ' '}</span>;
}

function FakeTerminal() {
  const [lines, setLines] = useState([
    // "Email: er.vedantgaidhane@gmail.com",
    // "Contact No. : +91 72949 26849",

    "Welcome to Vedant's Terminal 24.04.2 LTS (Linux aarch64)",

    "Type anything below ...",
    
    ""
  ]);
  const [input, setInput] = useState("");

  const handleInput = (e) => setInput(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setLines([...lines, `$ ${input}`]);
      setInput("");
    }
  };

  return (
    <div style={{
      background: "#181a20",
      borderRadius: "12px",
      boxShadow: "0 0 8px #6c63ff33",
      padding: "2rem",
      border: "2px solid #6c63ff",
      marginBottom: "2rem",
      fontSize: "1.1rem",
      width: "100%",
      minHeight: "420px",
      fontFamily: "'Fira Mono', monospace",
      color: "#6c63ff",
      whiteSpace: "pre-line",
      display: "flex",
      flexDirection: "column"
    }}>
      <div style={{ flex: 1 }}>
        {lines.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
        <div>
          <span style={{ color: "#6c63ff" }}>$ </span>
          <input
            value={input}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            style={{
              background: "transparent",
              border: "none",
              color: "#e5e5e5",
              fontFamily: "inherit",
              fontSize: "1.1rem",
              outline: "none",
              width: "80%"
            }}
            autoFocus
          />
          <BlinkingCursor />
        </div>
      </div>
    </div>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_5xx6wy8',      // Replace with your EmailJS service ID
      'template_3og6q9u',     // Replace with your EmailJS template ID
      form,                   // The form data
      'f9gBmy7EVIjGTUlN4'       // Replace with your EmailJS public key
    )
    .then(() => {
      alert("Message sent! I'll get back to you soon.");
      setForm({ name: '', email: '', message: '' });
    })
    .catch(() => {
      alert("Failed to send message. Please try again.");
    });
  };

  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      background: "#23272e",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Fira Mono', 'Poppins', 'Segoe UI', Arial, monospace",
      color: "#e5e5e5",
      padding: 0,
      margin: 0
    }}>
      <div style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        maxWidth: "1400px",
        minHeight: "80vh",
        background: "#181a20",
        borderRadius: "18px",
        boxShadow: "0 0 24px 4px #6c63ff55",
        overflow: "hidden"
      }}>
        {/* Left: Linux Terminal */}
        <div style={{
          flex: 1.2,
          padding: "6rem 2rem 3rem 2rem",
          background: "#23272e",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          minWidth: "350px"
        }}>
          <FakeTerminal />
          <div style={{
            color: "#6c63ff88",
            fontFamily: "'Fira Mono', monospace",
            fontSize: "1rem",
            textAlign: "center",
            marginTop: "2rem"
          }}>
            # DevOps is all about communication. Drop me a message!










          </div>
        </div>
        {/* Right: Contact Form */}
        <div style={{
          flex: 1,
          padding: "6rem 1rem", // Reduced top padding to move form up
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "transparent",
          minWidth: "350px"
        }}>
          <div style={{ marginBottom: "1rem", fontSize: "1.1rem", width: "100%", textAlign: "left" }}>
            <span style={{ color: "#6c63ff", fontWeight: "bold" }}>vedant@portfolio  </span>
            <span style={{ color: "#e5e5e5" }}>: ~$</span>
            <BlinkingCursor />
          </div>
          <form onSubmit={handleSubmit} autoComplete="off" style={{ width: "100%", maxWidth: 300 }}>
            <div className="mb-3" style={{ marginBottom: "1rem" }}>
              <label className="form-label" style={{
                color: "#6c63ff",
                fontFamily: "inherit",
                fontSize: "1.15rem",
                
              }}>
                $ Name:
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="form-control"
                style={{
                  background: "#23272e",
                  color: "#e5e5e5",
                  border: "1px solid #6c63ff",
                  fontFamily: "inherit",
                  marginTop: "0.2rem",
                  boxShadow: "0 0 8px #6c63ff33",
                  fontSize: "1rem"
                }}
                placeholder="Type your name..."
              />
            </div>
            <div className="mb-3" style={{ marginBottom: "1.2rem" }}>
              <label className="form-label" style={{
                color: "#6c63ff",
                fontFamily: "inherit",
                fontSize: "1.15rem",
                
              }}>
                $ Email:
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="form-control"
                style={{
                  background: "#23272e",
                  color: "#e5e5e5",
                  border: "1px solid #6c63ff",
                  fontFamily: "inherit",
                  marginTop: "0.2rem",
                  boxShadow: "0 0 8px #6c63ff33",
                  fontSize: "1rem"
                }}
                placeholder="Type your email..."
              />
            </div>
            <div className="mb-3" style={{ marginBottom: "1.2rem" }}>
              <label className="form-label" style={{
                color: "#6c63ff",
                fontFamily: "inherit",
                fontSize: "1.15rem",
                
              }}>
                $ Message:
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="form-control"
                rows={4}
                style={{
                  background: "#23272e",
                  color: "#e5e5e5",
                  border: "1px solid #6c63ff",
                  fontFamily: "inherit",
                  marginTop: "0.2rem",
                  boxShadow: "0 0 8px #6c63ff33",
                  fontSize: "1rem"
                }}
                placeholder="Type your message..."
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                backgroundColor: "#6c63ff",
                border: "none",
                fontFamily: "inherit",
                fontWeight: "bold",
                letterSpacing: "1px",
                boxShadow: "0 0 8px #6c63ff55",
                fontSize: "1rem",
                padding: "0.4rem 1.2rem"
              }}
            >
              $ Send
            </button>
            {/* Contact Info Below Button */}
            <div style={{
              marginTop: "2rem",
              color: "#e5e5e5",
              fontSize: "1.08rem",
              textAlign: "center",
              lineHeight: "1.7"
            }}>
              Email: <span style={{ color: "#6c63ff", fontWeight: "bold" }}>er.vedantgaidhane@gmail.com</span><br />
              Contact No: <span style={{ color: "#6c63ff", fontWeight: "bold" }}>+91 72949 26849</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;