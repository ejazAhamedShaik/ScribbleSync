"use client";
import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

class RichTextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleChange = (value) => {
    this.setState({ text: value });
  };

  modules = {
    toolbar: {
      container: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ align: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        [{ size: ["small", false, "large", "huge"] }],
      ],
    },
  };

  formats = [
    "header",
    "font",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "align",
    "link",
    "image",
    "size",
  ];

  render() {
    return (
      <div className="min-h-full">
        <ReactQuill
          style={{ height: '100%' }}
          value={this.state.text}
          onChange={this.handleChange}
          modules={this.modules}
          formats={this.formats}
        />
      </div>
    );
  }
}

export default RichTextEditor;
