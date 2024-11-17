// Obtendo o contexto do elemento canvas
const ctx = document.getElementById('graficoProducao').getContext('2d');

// Dados fictícios de produção mensal para diferentes categorias de produtos
const producaoFolhosas = [80, 90, 85, 100, 95, 110];      // Ex: Alface, Couve
const producaoErvas = [30, 35, 32, 40, 38, 45];            // Ex: Manjericão, Salsa
const producaoVegetaisFrutas = [60, 65, 70, 75, 80, 85];   // Ex: Tomate, Pimentão
const producaoBrotos = [20, 25, 22, 30, 28, 35];           // Ex: Microgreens, Brotos de girassol
const producaoCogumelos = [10, 15, 12, 20, 18, 25];        // Ex: Shimeji, Shiitake

// Calculando a produção total para cada mês somando todas as categorias
const producaoTotal = producaoFolhosas.map((valor, index) => {
  return (
    valor +
    producaoErvas[index] +
    producaoVegetaisFrutas[index] +
    producaoBrotos[index] +
    producaoCogumelos[index]
  );
});

// Dados do gráfico com todas as categorias e o total
const dadosProducao = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
  datasets: [
    {
      label: 'Folhosas (kg)',
      data: producaoFolhosas,
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
      tension: 0.3
    },
    {
      label: 'Ervas (kg)',
      data: producaoErvas,
      borderColor: 'rgba(153, 102, 255, 1)',
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      fill: true,
      tension: 0.3
    },
    {
      label: 'Vegetais e Frutas Pequenas (kg)',
      data: producaoVegetaisFrutas,
      borderColor: 'rgba(255, 159, 64, 1)',
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      fill: true,
      tension: 0.3
    },
    {
      label: 'Brotos e Microgreens (kg)',
      data: producaoBrotos,
      borderColor: 'rgba(255, 206, 86, 1)',
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      fill: true,
      tension: 0.3
    },
    {
      label: 'Cogumelos (kg)',
      data: producaoCogumelos,
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      fill: true,
      tension: 0.3
    },
    {
      label: 'Produção Total (kg)',
      data: producaoTotal,
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      fill: true,
      tension: 0.3
    }
  ]
};

const config = {
  type: 'line',
  data: dadosProducao,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#F1FFFA' // Cor da legenda
        }
      },
      tooltip: {
        enabled: true
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Meses',
          color: '#F1FFFA' // Cor do título do eixo X
        },
        ticks: {
          color: '#F1FFFA' // Cor dos rótulos do eixo X
        }
      },
      y: {
        title: {
          display: true,
          text: 'Produção (kg)',
          color: '#F1FFFA' // Cor do título do eixo Y
        },
        ticks: {
          color: '#F1FFFA' // Cor dos rótulos do eixo Y
        },
        beginAtZero: true
      }
    }
  }
};

// Renderizando o gráfico
const graficoProducao = new Chart(ctx, config);

// Obtendo o contexto do elemento canvas
const ctx2 = document.getElementById('graficoNivelAgua').getContext('2d');

// Dados fictícios de nível de água (em metros) por mês
const nivelAgua = [3.5, 3.2, 3.8, 3.9, 3.7, 3.6]; // Níveis de água em metros

// Dados e configuração do gráfico
const dadosNivelAgua = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
  datasets: [
    {
      label: 'Nível de Água (m)',
      data: nivelAgua,
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      fill: true,
      tension: 0.4
    }
  ]
};

const config2 = {
  type: 'line',
  data: dadosNivelAgua,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#F1FFFA' // Cor da legenda
        }
      },
      tooltip: {
        enabled: true
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Meses',
          color: '#F1FFFA' // Cor do título do eixo X
        },
        ticks: {
          color: '#F1FFFA' // Cor dos rótulos do eixo X
        }
      },
      y: {
        title: {
          display: true,
          text: 'Nível de Água (m)',
          color: '#F1FFFA' // Cor do título do eixo Y
        },
        ticks: {
          color: '#F1FFFA' // Cor dos rótulos do eixo Y
        },
        beginAtZero: true
      }
    }
  }
};

// Renderizando o gráfico
const graficoNivelAgua = new Chart(ctx2, config2);
