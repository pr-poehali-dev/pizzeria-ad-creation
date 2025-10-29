import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

type Category = 'Роллы' | 'Пицца' | 'Чуду' | 'Шаурма' | 'Снэки';

interface MenuItem {
  name: string;
  price: number;
  ingredients: string;
}

const menuData: Record<Category, MenuItem[]> = {
  'Роллы': [
    { name: 'Цезарь с курицей', price: 300, ingredients: 'нори, рис, курица, сыр, салат, помидор' },
    { name: 'Цезарь с креветкой', price: 330, ingredients: 'нори, рис, вареная креветка, сыр, салат, помидор' },
    { name: 'Ойси', price: 400, ingredients: 'рис, нори, креветка в кляре, огурцы, сливочный сыр лосось, cпайси, унаги' },
    { name: 'Запечённая Филадельфия', price: 400, ingredients: 'рис, нори, сливочный сыр, огурец, лосось, снежный краб шапочка, унаги' },
    { name: 'Ойси темпура', price: 430, ingredients: 'нори, рис, лосось, чеддер, креветка в кляре, зеленый лук' },
    { name: 'Калифорния – Краб', price: 380, ingredients: 'рис, нори, краб, огурец, сливочный сыр, масаго' },
    { name: 'Калифорния – Креветка', price: 380, ingredients: 'рис, нори, креветка, огурец, сливочный сыр, масаго' },
    { name: 'Калифорния – Лосось', price: 380, ingredients: 'рис, нори, лосось, огурец, сливочный сыр, масаго' },
    { name: 'Горячий краб', price: 370, ingredients: 'рис, нори, огурец, крабовые палочки, сыр, масаго, шапочка мацарелла' },
    { name: 'ЧизуРолл', price: 350, ingredients: 'нори, рис, курица, сыр, сырный замес, унаги' },
    { name: 'Филадельфия', price: 380, ingredients: 'рис, нори, сливочный сыр, огурец, лосось' },
    { name: 'Запеченная Креветка', price: 380, ingredients: 'рис, нори, креветка, сыр, спайси соус' }
  ],
  'Пицца': [
    { name: '4 сыра', price: 400, ingredients: 'сыр Моцарелла, Эмменталь, Горгонзола, Пармезан' },
    { name: 'Маргарита', price: 390, ingredients: 'соус томатный, сыр Моцарелла, помидоры, базилик, масло оливковое' },
    { name: 'Цезарь с курицей', price: 400, ingredients: 'куриное филе, помидоры, пармезан, фирменный соус, листья салата' },
    { name: 'Пепперони', price: 400, ingredients: 'тонкое тесто, томатный соус, сыр моцарелла, колбаски пепперони' },
    { name: 'Курица с грибами', price: 400, ingredients: 'соус сметанный, грибы шампиньоны, куриное филе, сыр моцарелла' },
    { name: 'Ойси', price: 440, ingredients: 'фирменная пицца с морепродуктами и авторским соусом' }
  ],
  'Чуду': [
    { name: 'Чуду с мясом и картошкой', price: 440, ingredients: 'тонкое тесто, мясо, картофель, специи' },
    { name: 'Чуду с зеленью', price: 280, ingredients: 'тонкое тесто, свежая зелень, специи' },
    { name: 'Чуду с творогом', price: 320, ingredients: 'тонкое тесто, домашний творог, специи' }
  ],
  'Шаурма': [
    { name: 'Шаурма классическая', price: 250, ingredients: 'курица, овощи, соус, лаваш' },
    { name: 'Шаурма острая', price: 270, ingredients: 'курица, острый соус, овощи, лаваш' }
  ],
  'Снэки': [
    { name: 'Картофель фри', price: 150, ingredients: 'картофель, специи' },
    { name: 'Наггетсы', price: 200, ingredients: 'куриное филе в панировке' },
    { name: 'Луковые кольца', price: 180, ingredients: 'лук в кляре' }
  ]
};

const categoryIcons: Record<Category, string> = {
  'Роллы': '🍱',
  'Пицца': '🍕',
  'Чуду': '🥟',
  'Шаурма': '🌯',
  'Снэки': '🍟'
};

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('Роллы');

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="max-w-[430px] mx-auto min-h-screen bg-white/95 backdrop-blur-sm shadow-2xl">
        <div className="sticky top-0 z-10 bg-gradient-to-r from-primary via-secondary to-accent p-6 pb-4 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl font-bold text-white tracking-tight">Рубас</h1>
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
              <Icon name="ShoppingCart" size={24} className="text-white" />
            </div>
          </div>
          <p className="text-white/90 text-sm font-medium">с. Рубас • Доставка 30-40 мин</p>
        </div>

        <div className="sticky top-[88px] z-10 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
          <div className="flex overflow-x-auto no-scrollbar px-4 py-3 gap-2">
            {(Object.keys(menuData) as Category[]).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105'
                    : 'bg-muted/50 text-foreground/70 hover:bg-muted hover:scale-105'
                }`}
              >
                <span className="mr-1.5">{categoryIcons[category]}</span>
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 pb-20 space-y-3 animate-fade-in">
          {menuData[selectedCategory].map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-2 border-transparent hover:border-primary/20 cursor-pointer group"
            >
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors pr-2 leading-tight">
                    {item.name}
                  </h3>
                  <Badge className="bg-gradient-to-r from-secondary to-primary text-white font-bold text-base px-3 py-1 flex-shrink-0 shadow-md">
                    {item.price}₽
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.ingredients}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-accent">
                    <Icon name="Clock" size={14} />
                    <span className="text-xs font-medium">20-25 мин</span>
                  </div>
                  <button className="bg-accent hover:bg-accent/90 text-white rounded-full p-2 transition-all hover:scale-110 shadow-md">
                    <Icon name="Plus" size={18} />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-2xl">
          <div className="max-w-[430px] mx-auto px-4 py-3">
            <button className="w-full bg-gradient-to-r from-primary via-secondary to-accent text-white font-bold py-4 rounded-2xl hover:scale-[1.02] transition-all shadow-lg flex items-center justify-center gap-2">
              <Icon name="ShoppingCart" size={20} />
              <span>Корзина пуста</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Index;
