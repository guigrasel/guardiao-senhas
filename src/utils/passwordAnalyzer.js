export function analyzePassword(password) {
  let score = 0
  let feedback = []

  if (!password) {
    return { score: 0, feedback: ["Digite uma senha para analisá-la."] }
  }

  // Regras básicas
  if (password.length >= 8) score += 20
  else feedback.push("Use pelo menos 8 caracteres.")

  if (/[A-Z]/.test(password)) score += 20
  else feedback.push("Adicione letras maiúsculas.")

  if (/[a-z]/.test(password)) score += 20
  else feedback.push("Adicione letras minúsculas.")

  if (/[0-9]/.test(password)) score += 20
  else feedback.push("Adicione números.")

  if (/[^A-Za-z0-9]/.test(password)) score += 20
  else feedback.push("Inclua símbolos (ex: @ # $ % !).")

  // Padrões comuns
  const common = ["123", "senha", "password", "qwerty", "111"]

  if (common.some(c => password.toLowerCase().includes(c))) {
    score = Math.max(10, score - 40)
    feedback.push("Evite padrões previsíveis como 123, senha, qwerty…")
  }

  return {
    score: Math.min(score, 100),
    feedback: feedback.length ? feedback : ["Ótima senha! Continue assim."]
  }
}
