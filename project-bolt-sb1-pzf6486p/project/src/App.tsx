import React, { useState } from 'react';
import { FileText, CheckSquare, FileInput as FileInvoice, Search, AlertTriangle, HelpCircle, Zap, Lightbulb, AlertOctagon, Printer, Share2, Download } from 'lucide-react';

type TabContent = {
  title: string;
  problems: Array<{
    title: string;
    procedure: string[];
  }>;
  tips: string;
  warning: string;
  screenshot?: string;
};

function App() {
  const [activeTab, setActiveTab] = useState('engagements');

  const tabsRow1 = [
    { id: 'engagements', label: 'Engagements Juridiques', icon: FileText, bgColor: 'bg-blue-50', textColor: 'text-blue-900', iconColor: 'text-blue-600', hoverColor: 'hover:bg-blue-100' },
    { id: 'service', label: 'Service Fait', icon: CheckSquare, bgColor: 'bg-green-50', textColor: 'text-green-900', iconColor: 'text-green-600', hoverColor: 'hover:bg-green-100' },
    { id: 'factures', label: 'Factures & Avoirs', icon: FileInvoice, bgColor: 'bg-purple-50', textColor: 'text-purple-900', iconColor: 'text-purple-600', hoverColor: 'hover:bg-purple-100' },
    { id: 'recherche', label: 'Recherche & Rapports', icon: Search, bgColor: 'bg-yellow-50', textColor: 'text-yellow-900', iconColor: 'text-yellow-600', hoverColor: 'hover:bg-yellow-100' },
  ];

  const tabsRow2 = [
    { id: 'depannage', label: 'Dépannage', icon: AlertTriangle, bgColor: 'bg-red-50', textColor: 'text-red-900', iconColor: 'text-red-600', hoverColor: 'hover:bg-red-100' },
    { id: 'aide', label: 'Aide & Ressources', icon: HelpCircle, bgColor: 'bg-cyan-50', textColor: 'text-cyan-900', iconColor: 'text-cyan-600', hoverColor: 'hover:bg-cyan-100' },
  ];

  const tabContent: Record<string, TabContent> = {
    engagements: {
      title: "Engagements Juridiques",
      problems: [
        {
          title: "Création d'un engagement juridique",
          procedure: [
            "1. Ouvrez OPALE",
            "2. Cliquez sur « Engagements Juridiques »",
            "3. Remplissez chaque champ demandé (objet, fournisseur, montant, date)",
            "4. Validez en cliquant sur le bouton enregistrer"
          ]
        },
        {
          title: "Annulation/modification d'un engagement validé",
          procedure: [
            "1. Accédez à votre engagement",
            "2. Cliquez sur « Annuler » ou « Modifier »",
            "3. Confirmez avec une justification claire"
          ]
        }
      ],
      tips: "Préparez tous les documents et informations nécessaires avant de commencer la saisie pour gagner du temps.",
      warning: "Vérifiez systématiquement le budget disponible et les pièces justificatives avant validation.",
      screenshot: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000"
    },
    service: {
      title: "Service Fait",
      problems: [
        {
          title: "Enregistrement d'un service fait",
          procedure: [
            "1. Ouvrez « Services Faits »",
            "2. Recherchez votre commande",
            "3. Vérifiez précisément les détails (date, quantité)",
            "4. Cliquez sur « valider »"
          ]
        },
        {
          title: "Gestion retours avant service fait",
          procedure: [
            "1. Cliquez sur votre commande",
            "2. Modifiez la quantité reçue",
            "3. Validez les nouvelles quantités ajustées"
          ]
        }
      ],
      tips: "Validez le service fait dès réception pour éviter les retards de paiement.",
      warning: "Vérifiez toujours la correspondance exacte entre le bon de livraison et la commande.",
      screenshot: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000"
    },
    factures: {
      title: "Factures & Avoirs",
      problems: [
        {
          title: "Rattachement d'une facture à un EJ",
          procedure: [
            "1. Accédez à « Factures » depuis Chorus Pro",
            "2. Vérifiez la facture PDF",
            "3. Recherchez l'engagement",
            "4. Validez le rattachement"
          ]
        },
        {
          title: "Traitement des avoirs/crédits",
          procedure: [
            "1. Ouvrez « Facturation »",
            "2. Cliquez sur « Nouvel avoir »",
            "3. Remplissez clairement (montant, raison)",
            "4. Validez"
          ]
        },
        {
          title: "Traitement factures restauration/bourses",
          procedure: [
            "1. Ouvrez « Facturation dédiée »",
            "2. Sélectionnez le type de facture (restauration, bourse)",
            "3. Remplissez les champs requis",
            "4. Validez"
          ]
        }
      ],
      tips: "Utilisez les filtres pour identifier rapidement les factures en attente.",
      warning: "Vérifiez l'exactitude des montants et la conformité des pièces justificatives avant validation.",
      screenshot: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=1000"
    },
    recherche: {
      title: "Recherche & Rapports",
      problems: [
        {
          title: "Génération rapports financiers",
          procedure: [
            "1. Cliquez sur « Rapports »",
            "2. Choisissez type de rapport (budget, dépenses)",
            "3. Sélectionnez période et autres paramètres",
            "4. Cliquez sur « Générer »"
          ]
        },
        {
          title: "Recherche écritures comptables",
          procedure: [
            "1. Utilisez « Recherche avancée »",
            "2. Entrez les critères (dates, montants, fournisseur)",
            "3. Lancez la recherche"
          ]
        }
      ],
      tips: "Utilisez les raccourcis favoris pour accéder rapidement aux rapports fréquents.",
      warning: "Actualisez systématiquement les données avant chaque génération de rapport.",
      screenshot: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
    },
    depannage: {
      title: "Dépannage",
      problems: [
        {
          title: "Options grisées ou indisponibles",
          procedure: [
            "1. Vérifiez que les étapes précédentes ont été validées",
            "2. Contrôlez les droits d'accès",
            "3. Demandez autorisation à un administrateur si nécessaire"
          ]
        },
        {
          title: "Rectifier erreurs après validation",
          procedure: [
            "1. Ouvrez l'opération",
            "2. Cliquez sur « Modifier » si disponible",
            "3. Contactez votre administrateur si modification impossible"
          ]
        },
        {
          title: "Gestion validations intempestives",
          procedure: [
            "1. Activez les confirmations systématiques",
            "2. Réglez vos préférences dans paramètres utilisateur",
            "3. Validez les modifications"
          ]
        }
      ],
      tips: "Consultez l'historique des actions pour identifier l'origine des problèmes.",
      warning: "Documentez précisément les erreurs rencontrées avant toute intervention.",
      screenshot: "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?auto=format&fit=crop&q=80&w=1000"
    },
    aide: {
      title: "Aide & Ressources",
      problems: [
        {
          title: "Formation pratique OPALE",
          procedure: [
            "1. Accédez à M@gistère via votre portail académique",
            "2. Sélectionnez « Formation pratique OPALE »",
            "3. Suivez le tutoriel interactif"
          ]
        },
        {
          title: "Personnalisation ergonomie",
          procedure: [
            "1. Cliquez sur « Paramètres »",
            "2. Ajustez vues et icônes selon vos préférences",
            "3. Enregistrez les modifications"
          ]
        },
        {
          title: "Contact assistance rapide",
          procedure: [
            "1. Accédez à « Aide »",
            "2. Cliquez sur Chatbot @LOA",
            "3. Posez directement votre question"
          ]
        }
      ],
      tips: "Gardez sous la main les fiches pratiques et tutoriels fréquemment consultés.",
      warning: "Assurez-vous de consulter des ressources actualisées pour éviter les informations obsolètes.",
      screenshot: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000"
    }
  };

  const renderTabContent = (tabId: string) => {
    const content = tabContent[tabId];
    const activeTabInfo = [...tabsRow1, ...tabsRow2].find(tab => tab.id === tabId);
    
    if (!content || !activeTabInfo) return null;

    return (
      <div className="bg-white rounded-xl shadow-sm p-6 mt-4 border border-gray-100">
        <div className="lg:flex gap-8">
          {/* Left column with content */}
          <div className="lg:w-2/3 space-y-6">
            <h2 className={`text-2xl font-bold mb-6 ${activeTabInfo.textColor}`}>{content.title}</h2>
            
            <div className="space-y-8">
              {content.problems.map((problem, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{problem.title}</h3>
                  <div className="space-y-2">
                    {problem.procedure.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start gap-2">
                        <div className="min-w-[24px] h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-sm">
                          {stepIndex + 1}
                        </div>
                        <p className="text-gray-700">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <div className="flex items-center gap-2 text-green-600 mb-2">
                  <Lightbulb size={20} />
                  <h3 className="text-lg font-semibold">Astuce pratique</h3>
                </div>
                <p className="text-gray-700">{content.tips}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-amber-600 mb-2">
                  <AlertOctagon size={20} />
                  <h3 className="text-lg font-semibold">Point de vigilance</h3>
                </div>
                <p className="text-gray-700">{content.warning}</p>
              </div>
            </div>
          </div>

          {/* Right column with screenshot */}
          {content.screenshot && (
            <div className="lg:w-1/3 mt-6 lg:mt-0">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={content.screenshot} 
                  alt={`Illustration ${content.title}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">OPALE Survival Kit</h1>
          <p className="text-lg text-gray-600">Solutions pratiques aux problèmes quotidiens</p>
          
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full inline-flex items-center gap-2 hover:bg-blue-700 transition-colors">
            <Zap size={20} />
            Votre boîte à outils pour naviguer dans OPALE
          </button>
        </div>

        {/* Main Info Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">
            OPALE vous pose problème ? Vous n'êtes pas seul(e) !
          </h2>
          <p className="text-gray-600 mb-4">
            Ce guide se concentre sur les 20 questions les plus fréquentes des utilisateurs d'OPALE. Nous avons identifié 
            vos principaux points de friction et apportons des réponses concrètes.
          </p>
          
          <div className="flex gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-blue-600">
              <Zap size={18} /> Solutions directes
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <Lightbulb size={18} /> Astuces pratiques
            </div>
            <div className="flex items-center gap-2 text-purple-600">
              <AlertOctagon size={18} /> Points de vigilance
            </div>
          </div>
        </div>

        {/* Two-Line Navigation Tabs */}
        <div className="flex flex-col gap-2">
          {/* First Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {tabsRow1.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors
                    ${isActive ? tab.bgColor : 'bg-white'} 
                    ${isActive ? tab.textColor : 'text-gray-600'}
                    ${!isActive && tab.hoverColor}`}
                >
                  <Icon size={20} className={isActive ? tab.iconColor : 'text-gray-500'} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-2 gap-2">
            {tabsRow2.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors
                    ${isActive ? tab.bgColor : 'bg-white'} 
                    ${isActive ? tab.textColor : 'text-gray-600'}
                    ${!isActive && tab.hoverColor}`}
                >
                  <Icon size={20} className={isActive ? tab.iconColor : 'text-gray-500'} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        {renderTabContent(activeTab)}

        {/* Footer */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex justify-center gap-6">
            <button className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
              <Download size={18} /> PDF
            </button>
            <button className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
              <Printer size={18} /> Imprimer
            </button>
            <button className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
              <Share2 size={18} /> Partager
            </button>
          </div>
          
          <div className="text-center text-sm text-gray-500 mt-4">
            © 2023 OPALE Survival Kit - Tous droits réservés<br />
            Version 1.0.0 - Dernière mise à jour : 15/11/2023
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;