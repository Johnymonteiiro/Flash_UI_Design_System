import React, { useEffect, useState } from "react";
import shiki, { getHighlighter } from "shiki";

interface CodePreviewProps {
  code: string;
  language: string;
}

export const CodePreview = ({ code, language }: CodePreviewProps) => {
  const [highlightedCode, setHighlightedCode] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!code || !language) return;

    const highlightCode = async () => {
      setLoading(true); // Ativar indicador de carregamento
      try {
        const highlighter = await getHighlighter({
          themes: [
            "dark-plus",
            "slack-dark",
            "dracula",
            "material-theme-darker",
          ],
          langs: [language],
        });
        const highlighted = highlighter.codeToHtml(code, {
          lang: language,
          theme: "material-theme-darker",
        });
        setHighlightedCode(highlighted);
      } catch (error) {
        console.error("Erro ao destacar o código:", error);
      } finally {
        setLoading(false); // Desativar indicador de carregamento, independentemente do resultado
      }
    };

    highlightCode();
  }, [code, language]);

  return (
    <div
      className="w-full prose-pre:p-4 prose-pre:rounded-b"
      style={{ overflow: "auto" }}
    >
      {loading ? (
        <div className="text-center">Carregando...</div> // Mostrar mensagem de carregamento enquanto destaca o código
      ) : (
        <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
      )}
    </div>
  );
};
