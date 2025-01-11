"use client";
import { Container } from "@/components/ui-self/container/container";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

pdfjs.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

function Schedule() {
  const searchParams = useSearchParams();
  const eventDay = Number(searchParams.get("day"));
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(
    typeof eventDay === "number" ? eventDay - 1 : 0,
  );
  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <Container className="gap-0">
      <Document
        file="/sonbeel-utsav-2024-schedule.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page
          pageNumber={pageNumber + 1}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>

      {numPages ? (
        <div className="flex flex-col items-center gap-5">
          <div className="flex gap-16">
            <Button
              onClick={() => {
                setPageNumber((pageNumber - 1) % numPages);
              }}
            >
              {"<"}
            </Button>
            <Button
              onClick={() => {
                setPageNumber((pageNumber + 1) % numPages);
              }}
            >
              {">"}
            </Button>
          </div>
          <p>
            Page {pageNumber + 1} of {numPages}
          </p>
        </div>
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={"animate-spin"}
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
        </>
      )}
    </Container>
  );
}

export default function ScheduleMain() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Schedule />
    </Suspense>
  );
}
