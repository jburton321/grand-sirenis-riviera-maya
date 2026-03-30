import { useState, useEffect, useRef } from 'react';
import { Download, Copy, ExternalLink, Check } from 'lucide-react';

const EMAIL_TEMPLATE_PATH = '/email-template.html';

const EMAIL_IMAGES = [
  'thank-you/vacation-vip-full-color-horiz0.png',
  'thank-you/topper1.png',
  'thank-you/layer-20.svg',
  'mexico-10.png',
  'group6.svg',
];

export function EmailPreviewPage() {
  const [emailHtml, setEmailHtml] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [baseUrl, setBaseUrl] = useState('');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const url = window.location.origin;
    setBaseUrl(url);

    fetch(EMAIL_TEMPLATE_PATH)
      .then((res) => res.text())
      .then((html) => {
        setEmailHtml(html);
      })
      .catch((err) => console.error('Failed to load email template:', err));
  }, []);

  const getProcessedHtml = (useAbsoluteUrls = true) => {
    let processed = emailHtml;
    if (useAbsoluteUrls) {
      processed = processed.replace('<head>', `<head><base href="${baseUrl}/">`);
    }
    processed = processed.replace(/\{\{PHONE\}\}/g, '800-88-GURUS');
    processed = processed.replace(/\{\{purchaser\.fullname\}\}/g, 'John Doe');
    processed = processed.replace(/\{\{email\}\}/g, 'john.doe@example.com');
    processed = processed.replace(/\{\{purchase_date\}\}/g, new Date().toLocaleDateString());
    processed = processed.replace(/\{\{receipt_number\}\}/g, '1234567890');
    return processed;
  };

  const handleCopyCode = async () => {
    const htmlToCopy = getProcessedHtml(true);
    try {
      await navigator.clipboard.writeText(htmlToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      const textarea = document.createElement('textarea');
      textarea.value = htmlToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleOpenInNewTab = () => {
    const processed = getProcessedHtml(true);
    const blob = new Blob([processed], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

  const handleDownload = async () => {
    const JSZip = (await import('jszip')).default;
    const zip = new JSZip();
    const imagesFolder = zip.folder('images');
    let processedHtml = getProcessedHtml(false);
    processedHtml = processedHtml.replace(/src="\/thank-you\//g, 'src="images/');
    processedHtml = processedHtml.replace(/src="\/mexico/g, 'src="images/mexico');
    processedHtml = processedHtml.replace(/src="\/group/g, 'src="images/group');
    processedHtml = processedHtml.replace(/url\('\/thank-you\//g, "url('images/");

    zip.file('email-template.html', processedHtml);

    const imagePromises = EMAIL_IMAGES.map(async (imagePath) => {
      try {
        const response = await fetch(`/${imagePath}`);
        if (response.ok) {
          const blob = await response.blob();
          const fileName = imagePath.replace('thank-you/', '');
          imagesFolder?.file(fileName, blob);
        }
      } catch (err) {
        console.error(`Failed to fetch image: ${imagePath}`, err);
      }
    });

    await Promise.all(imagePromises);

    const content = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(content);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'email-template.zip';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-gray-900">Email Template Preview</span>
              <span className="hidden sm:inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                Production Ready
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors min-h-[44px] min-w-[44px]"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download ZIP</span>
              </button>

              <button
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors min-h-[44px] min-w-[44px]"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="hidden sm:inline text-green-600">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="hidden sm:inline">Copy Code</span>
                  </>
                )}
              </button>

              <button
                onClick={handleOpenInNewTab}
                className="inline-flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors min-h-[44px] min-w-[44px]"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="hidden sm:inline">Open in New Tab</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1">
        {emailHtml && baseUrl ? (
          <iframe
            ref={iframeRef}
            srcDoc={getProcessedHtml(true)}
            className="w-full border-0"
            style={{ height: 'calc(100vh - 64px)', minHeight: '800px' }}
            title="Email Preview"
          />
        ) : (
          <div className="flex items-center justify-center h-96">
            <div className="text-gray-500">Loading email template...</div>
          </div>
        )}
      </div>
    </div>
  );
}
